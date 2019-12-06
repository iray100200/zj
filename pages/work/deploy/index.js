import React from 'react'
import Navigator from '../../../components/navigator'
import Pagination from '../../../components/pagination'
import Layout from '../../../components/layout'
import url from 'url'
import querystring from 'querystring'
import fetch from 'isomorphic-unfetch'
import moment from 'moment'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'

const Home = ({ query, data = {
  body: {
    count: 0,
    list: []
  }
} }) => (
    <Layout activeIndex={4}>
      <Navigator title="工作部署" breadcrumb={[{
        text: '工作部署列表'
      }]} />
      <div className="rightCon fr">
      <Breadcrumbs style={{ padding: 24, background: '#eee' }} aria-label="breadcrumb">
          <Link color="inherit" href="/">
            首页
          </Link>
          <Link color="inherit" href="/work/deploy">
            工作部署
          </Link>
          <Typography color="textPrimary">工作部署列表</Typography>
        </Breadcrumbs>
        <div className="conMain">
          <style jsx>{`
          .pic-context a {
            width: 100%;
          }
          .pic-context .dep-vnumb {
            display: inline-block;
            border-radius: 2px;
            color: #a0a0af;
            margin-top: 8px;
            text-align: center;
            font-size: 12px;
          }
          .pic-context img {
            width: 160px;
            border-radius: 4px;
          }
          .pic-container {
            display: flex;
          }
          .dep-title {
            font-size: 150%;
            line-height: 1.4;
          }
          .release-time {
            color: #acacaf;
            margin-top: 8px;
            font-family: monospace;
            line-height: 1;
          }
        `}</style>
          <ul className="newsList">
            {
              data.body.list && data.body.list.map((obj, index) => {
                return <li key={index} className="clearfix pic-context">
                  <a href={`/work/deploy/${obj.id}`} target="_blank">
                    <div className="pic-container">
                      {
                        obj.banner && <img style={{ marginRight: 12 }} src={obj.banner} />
                      }
                      <label>
                        <div className="dep-title">{obj.title}</div>
                        <div className="release-time">
                          {obj.releaseTime && moment(new Date(obj.releaseTime)).format('YYYY-MM-DD')}
                        </div>
                      </label>
                    </div>
                  </a>
                </li>
              })
            }
          </ul>
          <Pagination total={data.body.count} onChange={current => {
            console.log(current)
          }} current={Number(query.current || 1)} itemRender={(current, type, elem) => {
            if (type === 'page') {
              return <a key={current} href={`/work/deploy?current=${current}`}>{current}</a>
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
  const res = await fetch(`http://47.96.129.81:8081/f/v1/workdeps?pageNum=${query.current || 1}&pageSize=20`)
  const result = await res.json()
  return { query, data: result, headers: req.headers }
}

export default Home
