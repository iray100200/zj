import fetch from 'isomorphic-unfetch'

const tokens = require('../../../entities/tokens')
const { Token, TKEN_COL_INS } = tokens

export default async (req, res) => {
  const { mobile } = req.query
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  try {
    if (TKEN_COL_INS.has(mobile)) {
      res.end(JSON.stringify({ success: true, token: TKEN_COL_INS.get(mobile) }))
      return
    }
    const tmp = await fetch(`${process.env.APP_URL}/f/v1/retrievepassword?mobile=${mobile}`, {
      method: 'post'
    })
    const result = await tmp.json()
    const code = result.body
    const token = new Token(mobile, code)
    TKEN_COL_INS.add(token)
    console.log('[新]', token)
    res.end(JSON.stringify({ token: token.token, success: true }))
  } catch (e) {
    res.end(JSON.stringify(e))
  }
}