import React from 'react'
import { FaNewspaper, FaHome, FaBullhorn, FaUserMd, FaPhoneSquare } from "react-icons/fa";
import { MdArrowDropDown } from 'react-icons/md'
import { CacheConsumer } from '../providers'

const navs = (userType) => [
  {
    text: '首页',
    link: '/',
    key: 0,
    icon: <FaHome size={20} />
  }, {
    key: 8,
    text: '后台管理',
    link: '/admin',
    hidden: userType !== 'admin',
  }, {
    text: '新闻中心',
    link: '/news',
    key: 1,
    icon: <FaNewspaper size={20} />
  }, {
    text: '专家栏目',
    link: '/experts',
    key: 2,
    icon: <FaUserMd size={20} />
  }, {
    text: '通知公告',
    link: '/notice',
    key: 3,
    icon: <FaBullhorn size={20} />
  }, {
    key: 4,
    text: '工作部署',
    link: '/work/deploy'
  }, {
    key: 5,
    text: '工作动态',
    link: '/work/dynamics'
  }, {
    key: 7,
    text: '举报检测',
    hidden: !userType || userType === 'admin',
    children: [
      {
        text: '假冒投诉',
        link: '/complaint/fake'
      }, {
        text: '侵权投诉',
        link: '/complaint/infringement'
      }, {
        text: '主动检测',
        link: '/detect'
      }, {
        text: '案件处理结果',
        link: '/result'
      }
    ]
  }, {
    key: 6,
    text: '联系我们',
    link: '/contactus',
    icon: <FaPhoneSquare size={20} />
  }
]

export default {
  Index: function (props) {
    const { activeIndex = 0 } = props
    return (
      <div id="nav" className="main-nav">
        <ul className="clearfix wp">
          <CacheConsumer>
            {
              data => {
                return navs(data.authtype, data.token).filter(obj => !obj.hidden).map((obj) => {
                  return <li key={obj.key} className={obj.key == activeIndex ? 'first active' : ''}>
                    <a href={obj.link} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="navItem">
                      {obj.icon}&nbsp;&nbsp;{obj.text}
                      {
                        obj.children && obj.children.length && <MdArrowDropDown style={{ marginTop: 2, marginLeft: 2 }} size={20} />
                      }
                    </a>
                    {
                      obj.children && obj.children.length &&
                      <div className="dropdown">
                        {
                          obj.children.map((obj, index) => {
                            return (
                              <a key={index} href={obj.link}>{obj.text}</a>
                            )
                          })
                        }
                      </div>
                    }
                  </li>
                })
              }
            }
          </CacheConsumer>
        </ul>
      </div>
    )
  }
}