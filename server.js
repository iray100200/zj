const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookie = require('cookie')
const next = require('next')
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 9001

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false
  }))

  server.use('/admin', (req, res) => {
    const _cookie = req.headers.cookie
    const cookieData = cookie.parse(_cookie || '')
    if (cookieData.authtype === 'admin') {
      return express.static('public').call(this, req, res)
    }
    res.writeHead(404)
    res.end()
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Server ready on http://localhost:${port}`)
  })
})