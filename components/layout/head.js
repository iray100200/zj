import React, { useState } from 'react'
import Head from 'next/head'
import { CacheConsumer } from '../providers'

export default function (props) {
  return (
    <>
      <Head>
        <link href="/client/css/reset.css" rel="stylesheet" />
        <link href="/client/css/main.css" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="></script>
      </Head>
      <div className="userSection" style={{ background: 'rgba(230, 230, 230, 0.7)' }}>
        <div className="wp clearfix" style={{ textAlign: 'left', lineHeight: '32px', height: 32 }}>
          <CacheConsumer>
            {data => {
              return data.token ? <span style={{ marginLeft: 12 }}>
                <label>欢迎 <strong>{Buffer.from(data.username || '', 'base64').toString('utf8')}</strong> 访问镇江市专利网站</label>
                <a href="/account/logout">安全退出</a>
              </span> :
                <span>
                  <label style={{ marginLeft: 4, marginRight: 8 }}>欢迎访问镇江市专利网站</label>
                  <a href={'/account/register'}>注册</a>
                  <a href={'/account/login'}>登录</a>
                </span>
            }}
          </CacheConsumer>
        </div>
      </div>
      <div id="hd" className="wp clearfix">
        <a href="/" className="hdLogo fl">
          <img src={'http://www.jscykj.cn/assets/img/logo.png'} />
        </a>
      </div></>
  )
}
