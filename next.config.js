const withCSS = require('@zeit/next-css')

module.exports = {
  ...withCSS({
    cssModules: true,
  }),
  env: {
    APP_URL: 'http://47.96.129.81:8081'
  }
}