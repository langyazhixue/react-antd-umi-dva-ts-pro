// import React, { Component } from 'react';

// 高阶组件注意事项
// 1. 不要在 render 方法中使用 HOC
// 如果在组件之外创建 HOC，这样一来组件只会创建一次。因此，每次 render 时都会是同一个组件。一般来说，这跟你的预期表现是一致的。

// render() {
  // 每次调用 render 函数都会创建一个新的 EnhancedComponent
  // EnhancedComponent1 !== EnhancedComponent2
//   const EnhancedComponent = enhance(MyComponent);
//   // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
//   return <EnhancedComponent />;
// }
// 这不仅仅是性能问题， 重新挂载组件会导致该组件及其所有子组件的状态丢失。

// 2. 静态方法不会被传递, 务必复制静态方法
// 3. Refs不会被传递
