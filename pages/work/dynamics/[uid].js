import React from 'react'
import fetch from 'isomorphic-unfetch'
import Navigator from '../../../components/navigator'
import Layout from '../../../components/layout'
import moment from 'moment'

const Item = ({ headers, data }) => {
  const { title, content, createDate } = data.body || {}
  return (
    <Layout headers={headers} activeIndex={5}>
      <Navigator title="工作动态" breadcrumb={[{
        text: '工作动态详情'
      }]} />
      <div className="rightCon fr">
        <div className="conMain">
          <h1 style={{ fontSize: 28, textAlign: 'center', lineHeight: 1.4, marginTop: 8, marginBottom: 28 }}>{title}</h1>
          <h4 style={{ fontSize: '0.92em', textAlign: 'left', color: '#a0a6ab' }}>发布于 {moment(createDate).format('YYYY-MM-DD')}</h4>
          <div className="notice-content" style={{ paddingTop: 28, lineHeight: 2, paddingBottom: 12 }} dangerouslySetInnerHTML={{ __html: content || '没有内容' }} />
        </div>
      </div>
    </Layout>
  )
}

Item.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`${process.env.APP_URL}/f/v1/workdynamic/${query.uid}`)
  const result = await res.json()
  return {
    data: result, headers: req.headers
  }
}

export default Item