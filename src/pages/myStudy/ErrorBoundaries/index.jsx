// 错误边界

// 过去,在组件内的JavaScript 错误会导致 React的 内部状态被破坏，并在下一次渲染时候产生可能无法追踪的错误
// 这些错误基本上是由较早的其他代码（非 React 组件代码）错误引起的，但 React 并没有提供一种在组件中优雅处理这些错误的方式，也无法从错误中恢复

// 部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

// 错误边界是一种React 组件，这种组件可以捕获并打印发生在其自组件树任何位置的js错误，并且会渲染出备用UI，而不是渲染出备用UI
// 错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误

import React from 'react';
function logErrorToMyService(error, errorInfo) {
  console.log(error);
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  // 错误边界的重要概念
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong</h1>;
    }
    
    return this.props.children;
  }
}

class MyWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  // 在这里可以将受到的props绑定到props上
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.list) {
      return {
        ...prevState,
        list: nextProps.list,
      };
    } else {
      return null;
    }
  }
  render() {
    return (
      <ul>
        {this.state.list.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );
  }
}

function MyErrorBoundary() {
  const list = [{
     name:'lilu',
    id:'hangzhou'
  }]
  // const list = {
  //   name:'dd',
  //   id:'hangzou'
  // }
  return (
    <ErrorBoundary>
      <MyWidget list={list}/>
    </ErrorBoundary>
  );
}

//  错误边界的工作方式类似于 JS 的 catch  {}

// 不同的地方在于错误边界只针对 React 组件。只有 class 组件才可以成为错误边界组件。大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。

// 错误边界只可以捕获自组件

// 错误边界应该放置在哪里
// 错误边界的粒度由你来决定，可以将其包装在最顶层的路由组件并为用户展示一个 “Something went wrong” 的错误信息，就像服务端框架经常处理崩溃一样
// 你也可以将单独的部件包装在错误边界以保护应用其他部分不崩溃。

// 未捕获错误的新行为：任务未被错误边界捕获的错误将会导致整个React 组件被卸载


export default MyErrorBoundary;
