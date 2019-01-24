import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { createActions } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render() {
    const { loginValue } = this.props;
    if (!loginValue) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder={'账号'} ref={(input) => {this.account = input}}/>
            <Input placeholder={'密码'} type={'password'} ref={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      // 路由重定向
      return <Redirect to={'/'} />
    }
  }
}

const mapStatesToProps = (state) => {
  return {
    // 注意别取名重复了。
    loginValue: state.getIn(['login', 'login'])
  }
};

// 映射dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    // 登录
    login (account, password) {
      console.log(account.value, password.value);
      dispatch(createActions.login(account.value, password.value))
    }
  }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Login)
