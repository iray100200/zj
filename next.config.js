const withCSS = require('@zeit/next-css')

module.exports = {
  ...withCSS({
    cssModules: true,
  }),
  env: {
    APP_URL: 'http://114.215.179.120:8080/netcrawl'
  }
}