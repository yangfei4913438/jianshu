import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, DetailHeader, DetailUserInfo, DetailContent } from './style'
import { createActions } from './store'

class Detail extends PureComponent {
  render() {
    const {header, auth, content} = this.props;
    return (
      <DetailWrapper>
        <DetailHeader>
          {header}
        </DetailHeader>
        <DetailUserInfo>
          <div>
            <p>{auth.get('name')}</p>
            <p>{auth.get('plus')}</p>
          </div>
        </DetailUserInfo>
        <DetailContent dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }

  componentDidMount () {
    let id = this.props.match.params.id;
    this.props.getArticleDetail(id)
  }
}

const mapStatesToProps = (state) => {
  return {
    header: state.getIn(['detail', 'header']),
    auth: state.getIn(['detail', 'auth']),
    content: state.getIn(['detail', 'content'])
  }
};

// 映射dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    // 获取初始化数据
    getArticleDetail (id) {
      dispatch(createActions.getArticleDetail(id))
    }
  }
};

export default connect(mapStatesToProps, mapDispatchToProps)(Detail)
