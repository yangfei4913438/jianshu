import { fromJS } from 'immutable'
import * as types from './actionTypes'

// 初始化对象，设置为不可变的immutable对象
const defaultState = fromJS({
  // 首页轮播图列表，antd的轮播图，只支持jpg格式的图片
  banners: [],
  articleList: [],
  recommendList: [],
  // 当前页，默认是1
  articlePage: 1,
  // 默认不展示回到顶部按钮
  showScroll: false
});

// 拆分，让代码看起来更简洁。
const initHomeListData = (state, action) => {
  // merge可以同时设置多个值。
  // 所有的对象，都在这里调用fromJS来转换成immutable对象
  return state.merge({
    banners: fromJS(action.banners),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
};

// 拆分，让代码看起来更简洁。
const getHomeMoreArticleList = (state, action) => {
  return state.merge({
    // 先把旧的取出来，然后拼接成新的数组
    articleList: state.get('articleList').concat(fromJS(action.list)),
    // 更新当前页码
    articlePage: action.page
  });
};

export default (state=defaultState, action) => {
  switch (action.type) {
    case types.HomeListData:
      return initHomeListData(state, action);

    case types.HomeMoreArticleList:
      return getHomeMoreArticleList(state, action);

    case types.HomeToggleTopShow:
      // 只有一行的，就不用拆分了
      return state.set('showScroll', action.show);

    default:
      return state
  }
}
