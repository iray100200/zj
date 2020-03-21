const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookie = require('cookie')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 9001
const path = require('path')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())
  server.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false
  }))

  server.get('/api/account', (req, res) => {
    const _cookie = req.headers.cookie
    const cookieData = cookie.parse(_cookie || '')
    res.status(200).json({
      userName: cookieData.username
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Server ready on http://localhost:${port}`)
  })
})