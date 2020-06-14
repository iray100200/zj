import cookie from 'cookie'

export default async (req, res) => {
  try {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    const cookieData = cookie.parse(req.headers.cookie || '')
    const userName = cookieData.username && Buffer.from(cookieData.username, 'base64').toString('utf8')
    res.end(JSON.stringify({
      success: true,
      data: {
        username: userName
      }
    }))
  } catch (e) {
    res.writeHead(404)
    res.end()
  }
}