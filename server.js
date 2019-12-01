const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookie = require('cookie')
const dev = process.env.NODE_ENV !== 'production'
const next = require('next')
const app = next({ dev })
const handle = app.getRequestHandler()

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

  server.listen(3004, (err) => {
    if (err) throw err
    console.log('Server ready on http://localhost:9001')
  })
})