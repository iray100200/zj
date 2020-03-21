import React from 'react'
import Navigator from '../components/navigator'
import Pagination from '../components/pagination'
import Layout from '../components/layout'
import url from 'url'
import querystring from 'querystring'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'

const Home = ({ query, headers, data = {
  body: {
    count: 0,
    list: []
  }
} }) => (
    <Layout headers={headers} activeIndex={2}>
      <Navigator title="专家栏目" breadcrumb={[{
        text: '专家列表'
      }]} />
      <div className="rightCon fr">
        <Breadcrumbs style={{ padding: 24, background: '#eee' }} aria-label="breadcrumb">
          <Link color="inherit" href="/">
            首页
          </Link>
          <Link color="inherit" href="/experts">
            专家栏目
          </Link>
          <Typography color="textPrimary">专家列表</Typography>
        </Breadcrumbs>
        <div className="conMain">
          <ul className="teachers clearfix">
            {
              data.body.list && data.body.list.map(obj => {
                return <li>
                  <a target="_blank" href={obj.introductionPath}>
                    <div className="imgWp">
                      <img src={obj.avatarPath} />
                    </div>
                    <div className="name">
                      <h4>{obj.name}</h4>
                      <p>{obj.profession}-{obj.education}</p>
                    </div>
                  </a>
                </li>
              })
            }
          </ul>
          <Pagination total={data.body.count} current={Number(query.current || 1)} itemRender={(current, type, elem) => {
            if (type === 'page') {
              return <a key={current} href={`/experts?current=${current}`}>{current}</a>
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
  const res = await fetch(`http://47.96.129.81:8081/f/v1/experts?pageNum=${query.current || 1}&pageSize=10`)
  const result = await res.json()
  return { query, data: result, headers: req.headers }
}

export default Home
