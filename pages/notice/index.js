import React from 'react'
import Navigator from '../../components/navigator'
import Pagination from '../../components/pagination'
import Layout from '../../components/layout'
import url from 'url'
import querystring from 'querystring'
import fetch from 'isomorphic-unfetch'
import moment from 'moment'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'

const Home = ({ query, headers, data = {
  body: {
    count: 0,
    list: []
  }
} }) => (
    <Layout headers={headers} activeIndex={3}>
      <Navigator title="通知公告" breadcrumb={[{
        text: '公告列表'
      }]} />
      <div className="rightCon fr">
        <Breadcrumbs style={{ padding: 24, background: '#eee' }} aria-label="breadcrumb">
          <Link color="inherit" href="/">
            首页
          </Link>
          <Link color="inherit" href="/notice">
            通知公告
          </Link>
          <Typography color="textPrimary">通知列表</Typography>
        </Breadcrumbs>
        <div className="conMain">
          <ul className="newsList">
            {
              data.body.list && data.body.list.map((obj, index) => {
                return <li key={index} className="clearfix">
                  <a href={`/notice/${obj.id}`} target="_blank">{obj.title}</a>
                  <span>{obj.releaseTime && moment(obj.releaseTime).format('YYYY-MM-DD')}</span>
                </li>
              })
            }
          </ul>
          <Pagination total={data.body.count} onChange={current => {
            location.href = `/notice?current=${current}`
          }} current={Number(query.current || 1)} itemRender={(current, type, elem) => {
            if (type === 'page') {
              return <a key={current} href={`/notice?current=${current}`}>{current}</a>
            }
            return elem
          }} />
        </div>
      </div>
    </Layout>
  )

Home.getInitialProps = async ({ req }) => {
  const _querystring = url.parse(req.url).query
  const query = querystring.parse(_querystring)
  const res = await fetch(`http://47.96.129.81:8081/f/v1/notices?pageNum=${query.current || 1}&pageSize=20`)
  const result = await res.json()
  return { query, data: result, headers: req.headers }
}

export default Home
