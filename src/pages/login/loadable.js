import Loadable from 'react-loadable';
import React from 'react'

const LoadableComponent = Loadable({
  loader: () => import('./'), // 异步加载index.js
  loading () {
    // 临时的显示内容
    return <div>加载中</div>
  },
});

export default () => <LoadableComponent/>
