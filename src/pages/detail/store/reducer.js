import { fromJS } from 'immutable'
import * as types from './actionTypes'

// 初始化对象，设置为不可变的immutable对象
const defaultState = fromJS({
  header: '',
  auth: {
    name: '',
    plus: ''
  },
  content: ''
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case types.ArticleDetail:
      return state.merge({
        header: fromJS(action.header),
        auth: fromJS(action.auth),
        content: fromJS(action.content)
      });
    default:
      return state
  }
}
