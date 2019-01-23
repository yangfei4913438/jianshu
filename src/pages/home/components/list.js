import React, { PureComponent, Fragment } from 'react'
import {ListItem, ListInfo, LoadMore} from '../style'
import {connect} from 'react-redux'
import { createActions } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { articleList, articlePage, getMoreList } = this.props;
    return (
      <Fragment>
        {
          articleList.map((item, index) => {
            return (
              // 因为是mock数据，所以ID，在重复获取的时候，无法唯一，这里只能通过index来变通一下
              <Link to={'/detail'} key={item.get('id') + index}>
                <ListItem>
                  <img className='pic' src={item.get('imgUrl')} alt={''}/>
                  <ListInfo>
                    <h3 className={'title'}>{item.get('title')}</h3>
                    <p className={'desc'}>{item.get('desc')}</p>
                    <div className={'iconWrapper'}>
                      <span>让心流浪_c0be</span>
                      <span className="iconfont icon">&#xe600;</span>27
                      <span className="iconfont icon">&#xe607;</span>23
                    </div>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        {/* 获取数据页的时候，用当前页码+1，表示取下一页的数据 */}
        <LoadMore onClick={() => getMoreList(articlePage+1)}>加载更多</LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList (page) {
      dispatch(createActions.getMoreArticleList(page))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
