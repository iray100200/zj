import EventEmitter from 'events'
import uuidv1 from 'uuid/v1'

class Token {
  emitter = new EventEmitter()
  constructor(mobile, code) {
    this.token = uuidv1()
    this.mobile = mobile
    this.code = code
    setTimeout(() => {
      this.emit('expired', this)
    }, 60000)
  }
  on(event, callback) {
    this.emitter.addListener(event, callback)
  }
  emit(event, value) {
    this.emitter.emit(event, value)
  }
}

class TokenCollection {
  tokens = []
  add = (token) => {
    token.on('expired', target => {
      this.tokens.filter(obj => {
        return obj.token !== target.token
      })
    })
    this.tokens = this.tokens.concat(token)
  }
  hasCode = (token, code) => {
    return this.tokens.some(obj => {
      return obj.token == token && obj.code == code
    })
  }
  has = (mobile) => {
    return this.tokens.some(obj => {
      return obj.mobile == mobile
    })
  }
  get = (mobile) => {
    const result = this.tokens.find(obj => {
      return obj.mobile == mobile
    })
    return result && result.token
  }
}

if (!global.instance) {
  global.instance = new TokenCollection()
}

module.exports = {
  TKEN_COL_INS: global.instance,
  TokenCollection,
  Token
}