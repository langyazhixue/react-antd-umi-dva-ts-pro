import React, { Component } from 'react';
// import MyErrorBoundary from './MyErrorBoundary';
// 代码分割
// 1. 打包是个非常棒的技术，但随着你的应用增长，你的代码包也将随之增长。尤其是在整合了体积巨大的第三方库的情况下。
// 你需要关注你代码包中所包含的代码，以避免因体积过大而导致加载时间过长

// 2. 为了避免搞出大体积的代码包，在前期就思考该问题并对代码包进行分割是个不错的选择。 
// 代码分割是由诸如 Webpack，Rollup 和 Browserify（factor-bundle）这类打包器支持的一项技术，能够创建多个包并在运行时动态加载。

// 3. 对你的应用进行代码分割能够帮助你“懒加载”当前用户所需要的内容，能够显著地提高你的应用性能。
// 尽管并没有减少应用整体的代码体积，但你可以避免加载用户永远不需要的代码，并在初始加载的时候减少所需加载的代码量。



// 1. React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
// React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。

// 2. 然后应该在 Suspense 组件中渲染 lazy 组件。如此是的我们可以使用在等待加载lazy组件时候做到优雅降级(如 loading 指示器)

// fallback 属性接受任何在组件加载过程中你想展示的 React 元素。
// 你可以将 Suspense 组件置于懒加载组件之上的任何位置。你甚至可以用一个 Suspense 组件包裹多个懒加载组件。

// 3. 异常捕获边界(Error boundaries)
// 如果模块加载失败（如网络问题），它会触发一个错误。你可以通过异常捕获边界（Error boundaries）技术来处理这些情况，以显示良好的用户体验并管理恢复事宜。




const OtherComponent = React.lazy(() => import('./LazyComponent'))
// function Spinner() {
//   return (
//     <h2>spinner</h2>
//   )
// }
class MyReactSuspense extends Component {
  render(){
      return (
        <React.Suspense fallback={<div>loading</div>}s>
        {/* <React.Suspense fallback={< Spinner />}></React.Suspense> */}
        <div>
          <OtherComponent />
        </div>
      </React.Suspense>
      )
  }
}
export default MyReactSuspense
