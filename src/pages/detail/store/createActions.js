import * as types from './actionTypes'
import axios from 'axios'

// 获取home数据列表
export const getArticleDetail = (id) => {
  // redux-thunk 支持这里的返回值为函数类型
  // 这个函数自动接收dispatch方法作为参数
  return (dispatch) => {
    axios.get(`/api/getArticleDetail?id=${id}`)
      .then(res => {
        console.log(res.config.url);
        dispatch(setArticleDetail(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
};

// 设置显示的文章信息，这个不是导出的方法。不需要写export关键字
// 这里的参数，只能有一个，不能有多个值
const setArticleDetail = (res) => {
  return {
    type: types.ArticleDetail,
    header: res.header,
    auth: res.auth,
    content: res.content
  }
};
