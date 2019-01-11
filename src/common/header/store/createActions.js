import * as types from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

// 切换Focused的状态值
export const getSwitchFocused = (value) => {
  return {
    type: types.SwitchTypes,
    value
  }
};

// 鼠标移动到热词区域
export const getMouseEnter = () => {
  return {
    type: types.MouseEnter
  }
};

// 鼠标离开热词区域
export const getMouseLeave = () => {
  return {
    type: types.MouseLeave
  }
};

// 更新热词页
export const getNewPage = (page) => {
  return {
    type: types.ChangePage,
    page
  }
};

// 获取热搜词列表
export const getHotWords = () => {
  // redux-thunk 支持这里的返回值为函数类型
  // 这个函数自动接收dispatch方法作为参数
  return (dispatch) => {
    axios.get('/api/hotWords')
      .then(res => {
        console.log(res);
        dispatch(setHotWords(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

// 获取热词，这个不是到处的方法。不需要写export关键字
const setHotWords = (list) => {
  return {
    type: types.HotWords,
    list: fromJS(list), // 因为全局数据都是immutable类型的，所以这里也要做一个转化。如果不转换，传值的时候会把全局对象的immutable类型修改为普通类型。
    allNumber: list.length // 一共有多少页
  }
};
