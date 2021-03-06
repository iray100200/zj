import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import _ from 'lodash'

const DynamicComponent = dynamic(() => import('./home'))

const Home = (props) => {
  const {
    news: [],
    notice: [],
    experts: [],
    deploy: [],
    dynamics: [],
    newsPics: [],
    headers } = props
  return (
    <Layout headers={headers} activeIndex={0}>
      <div>
        <div className="container clearfix">
          <div className="item col4" style={{ height: 326 }}>
            <div className="itemTit">
              <h3>新闻动态</h3>
              <a href="/news" className="itemMore">查看更多</a>
            </div>
            <div className="itemCon indexNews clearfix">
              <div className="focus fl">
                <ul>
                  {
                    props.newsPics.map(obj => {
                      return <li>
                        <img src={obj.imgpath} />
                        <div className="focusText">
                          <a target="_blank" href={obj.link}>{obj.title}</a>
                        </div>
                      </li>
                    })
                  }
                </ul>
                <div className="dots"></div>
              </div>
              <div className="textNews fr">
                {
                  props.news.slice(0, 1).map(obj => {
                    return (
                      <div className="headline">
                        <h3 title={obj.title} className="nowrap"><a href={obj.link}>{obj.title}</a></h3>
                      </div>
                    )
                  })
                }
                <ul>
                  {
                    props.news.slice(1).map(obj => {
                      return (
                        <li className="clearfix">
                          <a title={obj.title} href={obj.link}>{obj.title}</a>
                          {/* <span>{moment(obj.releaseTime).format('MM-DD')}</span> */}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="item col2" style={{ height: 326 }}>
            <div className="itemTit">
              <h3>通知公告</h3>
              <a href="/notice" className="itemMore">查看更多</a>
            </div>
            <div className="textNews fl" style={{ marginTop: 18.5, marginLeft: 20 }}>
              {
                props.notice.slice(0, 1).map(obj => {
                  return (
                    <div className="headline">
                      <h3 title={obj.title}><a href={`/notice/${obj.id}`}>{obj.title}</a></h3>
                    </div>
                  )
                })
              }
              <ul>
                {
                  props.notice.slice(1).map(obj => {
                    return (
                      <li className="clearfix">
                        <a title={obj.title} href={`/notice/${obj.id}`}>{obj.title}</a>
                        {/* <span>{moment(obj.releaseTime).format('MM-DD')}</span> */}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="container clearfix">
          <div className="item col6">
            <div className="itemTit">
              <h3>专家栏目</h3>
              <a href="/experts" className="itemMore">查看更多</a>
            </div>
            <div className="itemCon">
              <ul className="home-experts clearfix">
                {
                  props.experts.map(obj => {
                    return <li className="experts-list">
                      <a target="_blank" href={obj.introductionPath}>
                        <div className="img-ct">
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
            </div>
          </div>
        </div>

        <div className="container clearfix">
          <div className="item col3">
            <div className="itemTit">
              <h3>工作部署</h3>
              <a href="/work/deploy" className="itemMore">查看更多</a>
            </div>
            <div className="itemCon exchange">
              <ul className="listStyle">
                {
                  props.deploy.map(obj => {
                    return <li className="clearfix">
                      <a target="_blank" href={`/work/deploy/${obj.id}`}>{obj.title}</a>
                      {/* <span>{moment(obj.releaseTime).format('MM-DD')}</span> */}
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
          <div className="item col3">
            <div className="itemTit">
              <h3>工作动态</h3>
              <a href="/work/dynamics" className="itemMore">查看更多</a>
            </div>
            <div className="itemCon guide">
              <ul className="listStyle">
                {
                  props.dynamics.map(obj => {
                    return <li className="clearfix">
                      <a target="_blank" href={`/work/dynamics/${obj.id}`}>{obj.title}</a>
                      {/* <span>{moment(obj.releaseTime).format('MM-DD')}</span> */}
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <DynamicComponent />
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {
  // news
  const res_news = await fetch(`${process.env.APP_URL}/f/v1/news?pageNum=1&pageSize=7`)
  const result_news = await res_news.json()
  // new-with-picture
  const res_news_p = await fetch(`${process.env.APP_URL}/f/v1/news?pageNum=1&pageSize=5&hasPicture=1`)
  const result_news_p = await res_news_p.json()
  // notice
  const res_notice = await fetch(`${process.env.APP_URL}/f/v1/notices?pageNum=1&pageSize=7`)
  const result_notice = await res_notice.json()
  // experts
  const res_experts = await fetch(`${process.env.APP_URL}/f/v1/experts?pageNum=1&pageSize=10`)
  const result_experts = await res_experts.json()
  // deploy
  const res_deploy = await fetch(`${process.env.APP_URL}/f/v1/workdeps?pageNum=1&pageSize=10`)
  const result_deploy = await res_deploy.json()
  // dynamics
  const res_dynamics = await fetch(`${process.env.APP_URL}/f/v1/workdynamics?pageNum=1&pageSize=10`)
  const result_dynamics = await res_dynamics.json()
  // result
  return {
    news: _.get(result_news, 'body.list', []),
    newsPics: _.get(result_news_p, 'body.list', []),
    notice: _.get(result_notice, 'body.list', []),
    experts: _.get(result_experts, 'body.list', []),
    deploy: _.get(result_deploy, 'body.list', []),
    dynamics: _.get(result_dynamics, 'body.list', []),
    headers: req.headers
  }
}

export default Home
