
import React from 'react'
import Head from './head'
import Navigation from './navigation'
import Footer from './footer'

const Layout = (props) => {
  const { activeIndex } = props
  console.log(props)
  return (
    <div className="bodyBg">
      <Head headers={props.headers} />
      <Navigation.Index headers={props.headers} activeIndex={activeIndex} />
      <div id="main">
        <div className="wp clearfix">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
