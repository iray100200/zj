const withLess = require("@zeit/next-less")
const withCss = require("@zeit/next-css")
const withPlugins = require("next-compose-plugins")

module.exports = withPlugins([withLess, withCss])