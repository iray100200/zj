import React from 'react'
import Navigator from '../components/navigator'
import Pagination from '../components/pagination'
import Layout from '../components/layout'
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
    <Layout headers={headers} activeIndex={1}>
      <Navigator title="新闻中心" breadcrumb={[{
        text: '新闻列表'
      }]} />
      <div className="rightCon fr">
        <Breadcrumbs style={{ padding: 24, background: '#eee' }} aria-label="breadcrumb">
          <Link color="inherit" href="/">
            首页
          </Link>
          <Link color="inherit" href="/news">
            新闻中心
          </Link>
          <Typography color="textPrimary">新闻列表</Typography>
        </Breadcrumbs>
        <div className="conMain">
          <ul className="newsList">
            {
              data.body.list && data.body.list.map((obj, index) => {
                return <li key={index} className="clearfix">
                  <a href={obj.link} target="_blank">{obj.title}</a>
                  <span>{obj.releaseTime && moment(obj.releaseTime).format('YYYY-MM-DD')}</span>
                </li>
              })
            }
          </ul>
          <Pagination total={data.body.count} onChange={current => {
            console.log(current)
          }} current={Number(query.current || 1)} itemRender={(current, type, elem) => {
            if (type === 'page') {
              return <a key={current} href={`/news?current=${current}`}>{current}</a>
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
  const res = await fetch(`${process.env.APP_URL}/f/v1/news?pageNum=${query.current || 1}&pageSize=20`)
  const result = await res.json()
  return { query, data: result, headers: req.headers }
}

export default Home
