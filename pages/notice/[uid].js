import React from 'react'
import fetch from 'isomorphic-unfetch'
import Navigator from '../../components/navigator'
import Layout from '../../components/layout'
import moment from 'moment'

const Item = ({ headers, data }) => {
  const { title, content, createDate } = data.body || {}
  return (
    <Layout headers={headers} activeIndex={3}>
      <Navigator title="通知公告" breadcrumb={[{
        text: '公告详情'
      }]} />
      <div className="rightCon fr">
        <div className="conMain">
          <h1 style={{ fontSize: 28, textAlign: 'center', lineHeight: 1.4, marginTop: 8, marginBottom: 28 }}>{title}</h1>
          <h4 style={{ fontSize: '0.92em', textAlign: 'left', color: '#a0a6ab' }}>发布于 {moment(createDate).format('YYYY-MM-DD')}</h4>
          <div className="notice-content" style={{ paddingTop: 28, lineHeight: 2, paddingBottom: 12 }} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Layout>
  )
}

Item.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`${process.env.APP_URL}/f/v1/notice/${query.uid}`)
  const result = await res.json()
  return {
    data: result, headers: req.headers
  }
}

export default Item