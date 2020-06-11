import React from 'react'
import Navigator from '../components/navigator'
import Layout from '../components/layout'
import url from 'url'
import querystring from 'querystring'
import { Map, Marker } from 'react-amap'
import { MdLocationOn, MdPermPhoneMsg, MdEmail, MdCode, MdPrint } from "react-icons/md"

const CENTER = {
  longitude: 119.5142934176, latitude: 32.1993389757
}

const Home = ({ query, headers }) => (
  <Layout headers={headers} activeIndex={6}>
    <Navigator title="联系我们" breadcrumb={[{
      text: '联系方式'
    }]} />
    <div className="rightCon fr">
      <style jsx>
        {
          `
            .contact-us >* {
              margin: 8px;
              display: flex;
              align-items: center;
            }
            .contact-us i {
              display: flex;
              margin-right: 12px;
            }
          `
        }
      </style>
      <div style={{ padding: 24 }}>
        <div className="contact-us" style={{ background: '#eee', padding: 20, textAlign: 'center' }}>
          <h2><i><MdLocationOn /></i>地址：江苏镇江京口区学府路301号</h2>
          <h2><i><MdPermPhoneMsg /></i>电话：<a href="tel:0511-88795397">0511-88795397</a></h2>
          <h2><i><MdCode /></i>邮编：212013</h2>
          <h2><i><MdEmail /></i>邮箱：<a href="email:zscq@ujs.edu.cn">zscq@ujs.edu.cn</a></h2>
        </div>
        <div style={{ height: 500, marginTop: 24, border: '1px solid #eee' }} >
          <Map zoom={12} center={CENTER} amapkey={'83bed190cc1c9f559b9466c396287bd6'}>
            <Marker position={CENTER}></Marker>
          </Map>
        </div>
      </div>
    </div>
  </Layout>
)

Home.getInitialProps = async ({ req }) => {
  const _querystring = url.parse(req.url).query
  return { query: querystring.parse(_querystring), headers: req.headers }
}

export default Home
