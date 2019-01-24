import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class Write extends PureComponent {
  render() {
    const { loginValue } = this.props;
    if (loginValue) {
      return (
        <div>写文章页面</div>
      )
    } else {
      // 路由重定向
      return <Redirect to={'/login'} />
    }
  }
}

const mapStatesToProps = (state) => {
  return {
    // 注意别取名重复了。
    loginValue: state.getIn(['login', 'login'])
  }
};

export default connect(mapStatesToProps, null)(Write);
