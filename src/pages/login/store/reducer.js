import { fromJS } from 'immutable'
import * as types from './actionTypes'

// 初始化对象，设置为不可变的immutable对象
const defaultState = fromJS({
  login: false
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case types.LoginEvent:
      return state.set('login', fromJS(action.login));
    case types.LoginOutEvent:
      return state.set('login', fromJS(action.login));
    default:
      return state
  }
}
