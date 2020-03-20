const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookie = require('cookie')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 9001
const querystring = require('querystring')
const axios = require('axios')
const router = express.Router()
const path = require('path')

const remoteServer = 'http://47.96.129.81:8081'

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
      return express.static(path.resolve(__dirname, '../zjadmin/build')).call(this, req, res)
    }
    res.writeHead(404)
    res.end()
  })

  server.get('/api/account', (req, res) => {
    const _cookie = req.headers.cookie
    const cookieData = cookie.parse(_cookie || '')
    res.status(200).json({
      userName: cookieData.username
    })
  })

  server.all(/\/f\/v1/, (req, res, next) => {
    const _cookie = req.headers.cookie
    const cookieData = cookie.parse(_cookie || '')
    try {
      const url = `${remoteServer}${req.path}`
      console.log(req.method, req.headers, req.query)
      axios({
        url,
        method: req.method,
        headers: req.headers,
        params: {
          ...req.query,
          token: cookieData.token
        }
      }).then(res => res.data).then(rt => {
        res.status(200).json(rt)
      })
    } catch (err) {
      console.log(err)
      res.status(400).json(err)
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Server ready on http://localhost:${port}`)
  })
})