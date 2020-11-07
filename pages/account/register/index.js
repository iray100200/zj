import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Notification from '../../../components/notification'

const errorStyle = {
  backgroundColor: '#F4606C',
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

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    repeatPassword: '',
    email: '',
    mobile: ''
  }
  handleSubmit = async e => {
    e.preventDefault()
    if (!this.state.username) {
      error('请输入用户名')
      return
    }
    if (!this.state.email) {
      error('请输入邮箱')
      return
    }
    if (this.validatePassword()) {
      return
    }
    const mobileValidation = await this.validateMobile()
    if (mobileValidation) {
      error(mobileValidation.message)
      return
    }
    const { username, password, email, mobile } = this.state
    try {
      const fetcha = await fetch(`${process.env.APP_URL}/f/v1/user?username=${username}&password=${password}&zip_code=${email}&mobile=${mobile}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      const json = await fetcha.json()
      location.href = `/account/login/redirect?token=${json.token}&username=${username}&authtype=user&rememberme=0`
    } catch (exception) {
      console.log(exception)
    }
  }
  handleAccountChange = e => {
    this.setState({
      account: e.target.value
    })
  }
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }
  handleStateChange = e => {
    this.setState({
      rememberme: e.target.value
    })
  }
  update = key => e => {
    this.setState({
      [key]: e.target.value
    })
  }
  validatePassword = () => {
    const { password, repeatPassword } = this.state
    if (!password) {
      error('请输入密码')
      return true
    }
    if (!repeatPassword) {
      error('请再次输入密码')
      return true
    }
    if (password !== repeatPassword) {
      error('前后密码输入不一致')
      return true
    }
    return false
  }
  validateMobile = async () => {
    const { mobile } = this.state
    if (!mobile) {
      return {
        message: '请输入手机号'
      }
    }
    try {
      const res = await fetch(`${process.env.APP_URL}/f/v1/existMobile?mobile=${mobile}`)
      const result = await res.json()
      console.log('mobile', result)
      if (eval(result.body)) {
        return {
          message: '该手机已注册'
        }
      }
      return false
    } catch (e) {
      return {
        message: '验证失败'
      }
    }
  }
  render() {
    const { username, password, email, repeatPassword, mobile } = this.state
    return (
      <div id="page-container">
        <Head>
          <link href={"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=latin-ext"} rel="stylesheet" />
          <link href="/client/css/dela.css" rel="stylesheet" />
        </Head>
        <div className="all-dela-presets-container">
          <div className="dela-presets-container-2">
            <div className="dela-preset-container">
              <form className="dela-preset-2-2" method="get" onSubmit={this.handleSubmit}>
                <p className="dela-form__title">账号注册</p>
                <input type="text" value={username} onChange={this.update('username')} placeholder="输入用户名" required="" />
                <input type="email" value={email} onChange={this.update('email')} placeholder="输入邮箱" required="" />
                <input type="password" autoComplete="new-password" ref={ref => this.PwdElem = ref} value={password} onChange={this.update('password')} placeholder="输入密码" required="" />
                <input type="password" autoComplete="new-password" ref={ref => this.repeatPwdElem = ref} value={repeatPassword} onChange={this.update('repeatPassword')} placeholder="再次输入密码" required="" />
                <input type="text" value={mobile} ref={ref => this.mobileElem = ref} onChange={this.update('mobile')} placeholder="输入手机号" required="" />
                <input type="submit" value="注册" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
