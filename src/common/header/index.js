import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { createActions } from './store'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'
import {Pagination} from '../../tools'

class Header extends PureComponent {
  getListArea () {
    // 参数统一由props来处理
    const { focused, mouseIn, list, page, allNumber, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
    // 数据分页
    const pages = Pagination(page, 10, allNumber, list);

    // 聚焦或者鼠标处于当前区域的时候显示
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              // 这里要加上一个箭头函数，否则没办法传参进去。
              onClick={() => handleChangePage(allNumber, 10, page, this.spinIcon)}
            >
              {/* 通过ref获取图表的DOM结构，赋值给变量 */}
              <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pages.map((item) => {
                // 热词是不会重复的，所以可以作为key来使用
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props;
    return (
      // 当成div来用
      <HeaderWrapper>
        <Link to={'/'}>
          <Logo/>
        </Link>
        <Nav>
          <NavItem className={'left active'}>首页</NavItem>
          <NavItem className={'left'}>下载App</NavItem>
          <NavItem className={'right'}>登录</NavItem>
          <NavItem className={'right'}>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused} // focused的值发生改变的时候，触发样式
              timeout={200}  // 持续200ms，单位毫秒
              classNames="slide" // css类名前缀
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</span>
            {/* 直接调用方法即可，不需要传参 */}
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className={'writing'}>
            <span className="iconfont">&#xe616;</span>
            写文章
          </Button>
          <Button className={'reg'}>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

// 映射state
const mapStateToProps = (state) => {
  return {
    // 因为这是是immutable对象，所以取值需要使用get方法。
    // getIn方法里面的数组，第一个参数表示key, 第二个参数表示值
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    allNumber: state.getIn(['header', 'allNumber']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
};

// 映射dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        // 已经获取到数据了，就不再向服务器请求数据了。
        dispatch(createActions.getHotWords());
      }
      dispatch(createActions.getSwitchFocused(true))
    },
    handleInputBlur() {
      dispatch(createActions.getSwitchFocused(false))
    },
    handleMouseEnter() {
      dispatch(createActions.getMouseEnter())
    },
    handleMouseLeave() {
      dispatch(createActions.getMouseLeave())
    },
    handleChangePage(allNumber, num, page, spin) {
      // 获取当前旋转的角度
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); //ig 全文查找、忽略大小写
      // 如果存在
      if (originAngle) {
        // 将字符串解析为数字赋值给它
        originAngle = parseInt(originAngle)
      } else {
        // 如果不存在，表示当前旋转角度为0
        originAngle = 0
      }
      // 每次点击，都增加360度的旋转角度。
      spin.style.transform = `rotate(${originAngle+720}deg)`;
      const pages = Math.ceil(allNumber / num);
      if (page < pages) {
        dispatch(createActions.getNewPage(page + 1))
      } else {
        dispatch(createActions.getNewPage(1))
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
