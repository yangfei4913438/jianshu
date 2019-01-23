import * as types from './actionTypes'
import axios from 'axios'

// 获取home数据列表
export const getHomeListData = () => {
  // redux-thunk 支持这里的返回值为函数类型
  // 这个函数自动接收dispatch方法作为参数
  return (dispatch) => {
    axios.get('/api/home')
      .then(res => {
        console.log(res);
        dispatch(setHomeListData(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

// 获取home数据列表，这个不是导出的方法。不需要写export关键字
// 这里的参数，只能有一个，不能有多个值
const setHomeListData = (res) => {
  return {
    type: types.HomeListData,
    banners: res.banners,
    articleList: res.articleList,
    recommendList: res.recommendList
  }
};

// 获取更多的文章列表
export const getMoreArticleList = (page) => {
  return (dispatch) => {
    axios.get(`/api/moreArticleList?page=${page}`)
      .then(res => {
        console.log(res);
        dispatch(setMoreArticleList(res.data, page))
      })
      .catch(err => {
        console.log(err)
      })
  }
};
// 设置更多的文章列表数据
const setMoreArticleList = (list, page) => {
  return {
    type: types.HomeMoreArticleList,
    list: list,
    page: page
  }
};

// 是否回到顶部按钮
export const toggleTopShow = (show) => {
  return {
    type: types.HomeToggleTopShow,
    show
  }
};
