import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RefTransmitTest from './RefTransmit';
// ref
// React提供的这个ref属性，表示为对组件真正实例的引用，其实就是ReactDOM.render()返回的组件实例
// 1. ReactDOM.render()渲染组件时返回的是组件实例；
// 2. 渲染dom元素时，返回是具体的dom节点。
// ref可以挂载到组件上也可以是dom元素上；
// 1. 挂到组件(class声明的组件)上的ref表示对组件实例的引用。不能在函数式组件上使用 ref 属性，因为它们没有实例：
// 2. 挂载到dom元素上时表示具体的dom元素节点。

// 3.  ref属性可以设置为一个回调函数
// React 支持给任意组件添加特殊属性。ref 属性接受一个回调函数，它在组件被加载或卸载时会立即执行
// 当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数。
// 当给组件添加 ref 属性时，ref 回调接收当前组件实例作为参数。
// 当组件卸载的时候，会传入null
// ref 回调会在componentDidMount 或 componentDidUpdate 这些生命周期回调之前执行。

// 4. 当给组件、H5标签添加 ref 属性后，此实例只能在当前组件中被访问到，父组件的 refs 中是没有此引用的
// 5. 获取ref引用组件对应的dom节点 ReactDOM.findDOMNode(this.refs.myRef)(如果ref本身引用的就是该元素的实际dom节点，无需要使用)

// 6. ·this.refs 和 ReactDOM.findDOMNode的区别
// 1. ref添加到Compoennt上获取的是Compoent实例，添加到原生HTML上获取的是DOM；
// ReactDOM.findDOMNode，当参数是DOM，返回值就是该DOM；当参数是Component获取的是该Component render方法中的DOM
// 2. 二者主要区别在ref绑定在组件上的时候，this.refs获取到的是组件实例，ReactDOM.findDOMNode获取到的是dom节点

// 7 新版本的React已经不推荐我们使用ref string转而使用ref callback
// <Child ref={child => this._child = child}/>
// console.log(ReactDOM.findDOMNode(this._child))
class MyRefTest extends Component {
  doTest() {
    console.log('MyRefTest');
  }
  render() {
    return <div>MyRefTest</div>;
  }
}

class RefTest extends Component {
  componentDidMount() {
    console.group('ReactDOMfindDOMNode');
    let res = ReactDOM.findDOMNode(this.refs.refTest);
    console.log(res);
  }
  hanlderClick = () => {
    console.log(this.refs.refTest);
    this.refs.refTest.doTest();
  };
  getComInstance = compInstance => {
    console.group('compInstance');
    console.log(compInstance);
  };
  getEl = el => {
    console.log(el);
  };
  render() {
    return (
      <div>
        <h2>学习Ref</h2>
        {/* 推荐使用ref callback */}
        <MyRefTest ref={child => (this._MyRefTest = child)} />
        <button onClick={this.hanlderClick}>hanlderClick</button>
        <div>
          <h2> ref是一个回调函数</h2>
          <MyRefTest ref={compInstance => this.getComInstance(compInstance)} />
          <input ref={el => this.getEl(el)} />
        </div>
        <div>
          <h2>ref转发</h2>
          <h2>React.createRef</h2>
          <h2>React.forwardRef</h2>
          <RefTransmitTest />
        </div>
      </div>
    );
  }
}

export default RefTest;
