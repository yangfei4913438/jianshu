import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {RecommentWrapper, RecommentItem} from '../style'

class Recommend extends PureComponent {
  render() {
    let { articleList } = this.props;
    return (
      <RecommentWrapper>
        {
          articleList.map((item) => {
            return  <RecommentItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
          })
        }
      </RecommentWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'recommendList'])
  }
};

export default connect(mapStateToProps, null)(Recommend)
