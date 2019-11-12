import React, { Component } from 'react';
import ReactDOM from 'react-dom'
console.log(ReactDOM)

// 1.render ReactDOM.render(element, container[, callback])
// 在提供的`container`里渲染一个React元素，比不过返回该组件的引用

// 2.hydrate() 与 render() 相同， 用在服务器渲染上

// 3. unmountComponentAtNode(contaienr)
// 4. ReactDOM.unmountComponentAtNode(container) // top-level container
    // 从 DOM 中卸载组件，会将其事件处理器（event handlers）和 state 一并清除。
    // 如果指定容器上没有对应已挂载的组件，这个函数什么也不会做。如果组件被移除将会返回 true，如果没有组件可被移除将会返回 false。

// 5. findDOMNode()
// findDOMNode 是一个访问decentDOM 节点的应急方案。在大多数情况下，不推荐使用该方法，因为它会破坏组件的抽象结构
// 大多数情况下，你可以绑定一个 ref 到 DOM 节点上，可以完全避免使用 findDOMNode。

// 6. createPortal()
// 创建 portal。Portal 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外。
class Child extends Component {
  render() {
    return (
      <div>child</div>
    )
  }
}
class ReactDomAPITest extends Component {
  removeClid =() => {
    // 卸载掉整个APP
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  }
  render() {
    return (
      <div>
        <h2>ReactDOM</h2>
        <div >
          <h2>child</h2>
          <div>
            <button onClick={this.removeClid}>unmount</button>
          </div>
          <div id='reactDOMChild'>
            <Child/>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactDomAPITest;
