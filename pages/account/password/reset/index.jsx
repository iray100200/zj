import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Notification from '../../../../components/notification'

const errorStyle = {
  backgroundColor: '#F4606C',
  color: 'white',
  padding: '6px 12px',
  transform: 'translate(-50%, -60%)'
}

const normalStyle = {
  backgroundColor: '#0060ba',
  color: 'white',
  padding: '6px 12px',
  transform: 'translate(-50%, -60%)'
}

const error = (errorMsg) => {
  Notification.notice({
    message: errorMsg,
    variant: 'error'
  })
}

const notice = (message) => {
  Notification.notice({
    message: message,
    variant: 'success'
  })
}

class Item extends React.Component {
  state = {
    mobile: null,
    code: null,
    password: null,
    disableVerificationCode: false,
    timestamp: 0
  }
  timer1 = null
  timer2 = null
  handleSubmit = async e => {
    e.preventDefault()
    if (!this.state.mobile) {
      error('请输入手机号')
      return
    }
    if (!this.state.password) {
      error('请输入新密码')
      return
    }
    const passed = await this.verifyCaptcha()
    if (passed) {
      try {
        const { password, mobile } = this.state
        const res = await fetch(`http://47.96.129.81:8081/f/v1/resetpassword?mobile=${mobile}&password=${password}`, {
          method: 'post'
        })
        const result = await res.json()
        if (eval(result.body)) {
          location.href = '/'
        } else {
          error('更新失败')
        }
      } catch (e) {
        error('更新失败')
      }
    }
  }
  handleVerificationCode = async () => {
    const { mobile } = this.state
    if (!mobile) {
      error('请先输入手机号')
      return
    }
    try {
      const res = await fetch(`/api/captcha/generate?mobile=${mobile}`)
      const result = await res.json()
      if (result.token) {
        this.verificationToken = result.token
        this.setState({
          disableVerificationCode: true
        })
        this.timer1 = setInterval(() => {
          this.setState({
            disableVerificationCode: false
          })
          clearInterval(this.timer1)
          clearInterval(this.timer2)
          this.setState({
            timestamp: 0
          })
        }, 60000)
        this.timer2 = setInterval(() => {
          this.setState({
            timestamp: this.state.timestamp + 1
          })
        }, 1000)
      } else {
        error('获取验证码失败, 请重试')
      }
    } catch (e) {
      console.log(e)
      error('获取验证码失败, 请重试')
    }
  }
  update = key => e => {
    this.setState({
      [key]: e.target.value
    })
  }
  verifyCaptcha = async () => {
    try {
      const res = await fetch(`/api/captcha/verify?code=${this.state.code}&token=${this.verificationToken}`)
      const result = await res.json()
      if (result.hasCode) {
        return true
      } else {
        error('验证失败')
        return false
      }
    } catch (e) {
      error('网络错误')
      return false
    }
  }
  render() {
    const { timestamp, disableVerificationCode } = this.state
    return (
      <div id="page-container">
        <Head>
          <link href={"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=latin-ext"} rel="stylesheet" />
          <link href="/client/css/dela.css" rel="stylesheet" />
        </Head>
        <div className="all-dela-presets-container">
          <div className="dela-presets-container-2">
            <div className="dela-preset-container">
              <div className="dela-preset-container">
                <form className="dela-preset-2-3" onSubmit={this.handleSubmit} method="get">
                  <p className="dela-form__title">重置密码</p>
                  <input type="tel" onChange={this.update('mobile')} placeholder="输入手机号" pattern="[0-9]{11}" required="" />
                  <div className="dela-preset-2-3-1">
                    <input type="text" onChange={this.update('code')} ref={ref => {
                      if (ref) this.captchaElem = ref
                    }} placeholder="验证码" required="" />
                    <input type="button" onClick={this.handleVerificationCode} disabled={disableVerificationCode} value={disableVerificationCode ? '剩余' + (60 - timestamp) + '秒' : '获取验证码'} />
                  </div>
                  <input type="password" onChange={this.update('password')} placeholder="输入新密码" autoComplete="new-password" />
                  <input type="submit" value="更新密码" /><span className="dela-form__note">更新成功后请重新登录</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Item.getInitialProps = ({ req }) => {
  return {}
}

export default Item