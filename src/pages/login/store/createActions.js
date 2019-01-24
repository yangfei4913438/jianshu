import * as types from './actionTypes'
import axios from 'axios'

// 请求登录
export const login = (account, password) => {
  // redux-thunk 支持这里的返回值为函数类型
  // 这个函数自动接收dispatch方法作为参数
  return (dispatch) => {
    axios.post('/api/login', {
      data: {
        account,
        password
      }
    })
      .then(res => {
        console.log(res, res.data.login);
        dispatch(setLogin(res.data.login))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

// 设置登录状态，这个不是导出的方法。不需要写export关键字
// 这里的参数，只能有一个，不能有多个值
const setLogin = (res) => {
  return {
    type: types.LoginEvent,
    login: res
  }
};

// 请求登出
export const loginOut = () => {
  // redux-thunk 支持这里的返回值为函数类型
  // 这个函数自动接收dispatch方法作为参数
  return (dispatch) => {
    axios.get('/api/login_out')
      .then(res => {
        console.log(res, res.data.login);
        dispatch(setLoginOut(res.data.login))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

// 设置登录状态，这个不是导出的方法。不需要写export关键字
// 这里的参数，只能有一个，不能有多个值
const setLoginOut = (res) => {
  return {
    type: types.LoginOutEvent,
    login: res
  }
};
