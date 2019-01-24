import React, { PureComponent, Fragment } from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            {/* 因为header组件里面有Link功能，所以要写在BrowserRouter下面 */}
            <Header/>
            <Route
              path={'/'} // 路由地址
              exact // 完全匹配路由，才会解析
              component={Home} // 组件Home
            />
            <Route
              path={'/detail/:id'} // 传递ID参数, 动态路由
              exact
              component={Detail}
            />
            <Route
              path={'/login'}
              exact
              component={Login}
            />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
