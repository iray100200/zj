import React from 'react'
import Layout from '../../components/layout'
import Search from './search'

const Detect = () => {
  return (
    <Layout activeIndex={7}>
      <div style={{ minHeight: 500 }}>
        <Search />
      </div>
    </Layout>
  )
}

Detect.getInitialProps = async ({ req }) => {
  return { headers: req.headers }
}

export default Detect