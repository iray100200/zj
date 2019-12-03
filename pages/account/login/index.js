import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Notification from '../../../components/notification'

class Login extends React.Component {
  state = {
    account: '',
    password: '',
    rememberme: false
  }
  handleSubmit = async e => {
    e.preventDefault()
    const { account, password, rememberme } = this.state
    try {
      const fetcha = await fetch(`http://47.96.129.81:8081/f/v1/login?account=${account}&password=${password}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      const json = await fetcha.json()
      console.log('login', json)
      if (json.code === 0) {
        location.href = `/account/login/redirect?token=${json.token}&username=${json.body.username}&authtype=${json.body.type}&rememberme=${rememberme ? 1 : 0}`
        return
      }
      Notification.notice({
        message: '用户名或密码错误，请重新登录',
        variant: 'error'
      })
    } catch (exception) {
      console.log(exception)
      Notification.notice({
        message: '网络异常，请重试',
        variant: 'error'
      })
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
  render() {
    const { account, password } = this.state
    return (
      <div id="page-container">
        <Head>
          <link href={"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=latin-ext"} rel="stylesheet" />
          <link href="/client/css/dela.css" rel="stylesheet" />
        </Head>
        <div className="all-dela-presets-container">
          <div className="dela-presets-container-2">
            <div className="dela-preset-container">
              <form className="dela-preset-2-1" autoComplete="off" onSubmit={this.handleSubmit}>
                <p className="dela-form__title">账户登录</p>
                <input value={account} onChange={this.handleAccountChange} type="text" name="account" placeholder="账号名" autoComplete="off" />
                <input value={password} onChange={this.handlePasswordChange} type="password" name="password" placeholder="密码" />
                <label className="dela-form__checkbox">
                  记住我的登陆凭证
                  <input onChange={this.handleStateChange} type="checkbox" name="remember" />
                  <span></span>
                </label>
                <input type="submit" value="立即登录" />
                <span className="dela-form__rorgot-password"><a href="/account/password/reset">忘记密码?</a></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login