import React, { PureComponent } from 'react'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import Writer from './components/writer'
import Recommend from './components/recommend'
import List from './components/list'
import { Carousel } from 'element-react'
import { connect } from 'react-redux'
import { createActions } from './store'

class Home extends PureComponent {
  render() {
    const { banners, showScroll, handleScrollTop } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <Carousel trigger="click" autoplay height="270px">
            {
              banners.map((item) => {
                return (
                  <Carousel.Item key={item.get('id')}>
                    <img
                      className='banner-img'
                      title={item.get('title')}
                      src={item.get('imgUrl')} // 因为是immutable对象，所以不能直接用过取js属性那样来取，必须用get方法来取值
                      alt={item.get('title')}
                    />
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          showScroll ?  <BackTop onClick={handleScrollTop}>Top</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  componentDidMount () {
    this.props.initHomeListData();
    // 增加绑定
    this.bindEvents();
  }
  componentWillUnmount () {
    // 解绑监听事件
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  // 监听页面滚动
  bindEvents () {
    // 监听页面滚动事件
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStatesToProps = (state) => {
  return {
    banners: state.getIn(['home', 'banners']),
    showScroll: state.getIn(['home', 'showScroll'])
  }
};

// 映射dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    // 回到顶部
    // 把总共需要跨越的高度变成50份， 一个定时器每10MS执行一次，可达到平滑过渡的效果 ，做锚点也一样，可以根据目前的屏幕高度到达元素的屏幕高度，来进行平滑移动
    handleScrollTop () {
      let top = document.documentElement.scrollTop;
      let step = Math.floor(top / 50);
      let timer = null;
      timer = setInterval(() => {
        if (top <= 0) {
          clearInterval(timer);
        } else {
          top -= step;
          window.scrollTo(0, top);
        }
      }, 10)
    },
    // 页面监听函数
    changeScrollTopShow () {
      // 距离页码顶部，大于500像素的时候，才会显示回到顶部按钮
      if (document.documentElement.scrollTop > 500) {
        dispatch(createActions.toggleTopShow(true))
      } else {
        dispatch(createActions.toggleTopShow(false))
      }
    },
    // 获取初始化数据
    initHomeListData () {
      dispatch(createActions.getHomeListData())
    }
  }
};

export default connect(mapStatesToProps,mapDispatchToProps)(Home)
