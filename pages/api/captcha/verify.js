const tokens = require('../../../entities/tokens')
const { TKEN_COL_INS } = tokens

export default (req, res) => {
  const { code, token } = req.query
  const hasCode = TKEN_COL_INS.hasCode(token, code)
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify({
    success: true,
    hasCode
  }))
}