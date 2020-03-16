import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../components/theme'
import { CacheProvider } from '../components/providers'
import cookie from 'cookie'
import Notification from '../components/notification'
// import CssBaseline from '@material-ui/core/CssBaseline'

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    const cookieData = cookie.parse(pageProps.headers && pageProps.headers.cookie || '')
    cookieData.userName = cookieData.username && Buffer.from(cookieData.username, 'base64').toString('utf8')
    return (
      <React.Fragment>
        {/* <CssBaseline /> */}
        <Head>
          <title>镇江市专利网站</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CacheProvider value={cookieData}>
            <Component {...pageProps} />
            <Notification />
          </CacheProvider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}