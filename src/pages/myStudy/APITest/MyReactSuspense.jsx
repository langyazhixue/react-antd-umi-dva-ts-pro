
import React, { Component } from 'react'
// 1.  React.lazy()  允许你定义一个动态加载的组件。
  // 这有助于缩减 bundle 的体积，并延迟加载在初次渲染时未用到的组件。
  // const SomeComponent = React.lazy(() => import('./SomeComponent'));
  // 渲染 lazy 组件依赖该组件渲染树上层的 <React.Suspense> 组件。这是指定加载指示器（loading indicator）的方式。

// 2. React.Suspense
  // 1. React.Suspense 可以指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件
  // 2. 目前，懒加载组件是 <React.Suspense> 支持的唯一用例

  const OtherComponent = React.lazy(() => import('./LazyComponent'))
  function Spinner() {
    return (
      <h2>spinner</h2>
    )
  }
  class MyReactSuspense extends Component {
  render(){
      return (
        <React.Suspense fallback={< Spinner />}>
        <div>
          <OtherComponent/>
        </div>
      </React.Suspense>
      )
  }
}

export default MyReactSuspense
