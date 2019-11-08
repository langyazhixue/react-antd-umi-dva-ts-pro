import React, { Component } from 'react';

// React.createRef
// React.createRef 创建一个能够通过 ref 属性附加到 React 元素的 ref。
// React.forwardRef 会创建一个React组件，
// 这个组件能够将其接受的ref 属性转发到其组件树下的另一个组件中。这种技术并不常见，但在以下2种场景下特别又用
// 1. 转发  refs 到 DOM 组件
// 2. 在高阶组件中转发refs


class MyReactRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount(){
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <h2>React.createRef </h2>
        <input type = 'text' ref= {this.inputRef}/>
      </div>
    );
  }
}

export default MyReactRef;