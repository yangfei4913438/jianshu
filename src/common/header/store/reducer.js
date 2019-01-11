import * as types from './actionTypes'
import { fromJS } from 'immutable'

// 初始化对象，设置为不可变的immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1, // 默认第1页
  allNumber: 0 // 一共0页
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case types.SwitchTypes:
      // immutable对象的set方法，会结合之前immutable对象的值，和设置的值，返回一个全新的对象。
      return state.set('focused', action.value);
    case types.HotWords:
      // merge可以同时设置多个值
      return state.merge({
        list: action.list,
        allNumber: action.allNumber
      });
    case types.MouseEnter:
      return state.set('mouseIn', true);
    case types.MouseLeave:
      return state.set('mouseIn', false);
    case types.ChangePage:
      return state.set('page', action.page);
    default:
      return state
  }
}
