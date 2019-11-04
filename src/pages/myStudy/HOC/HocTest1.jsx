import React, { Component } from 'react';

// 将不相关的 props 传递给被包裹的组件
//  React Redux 的 `connect` 函数
// const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
// connect 是一个返回高阶组件的高阶函数

const WrappedComponent = '<div>test</div>';
const Comp = WappedHoc(WrappedComponent);

class HOCTest2 extends Component {
  render() {
    return (
      <div>
        <Comp />
      </div>
    );
  }
}

function WappedHoc(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'tt',
      };
    }
    render() {
      // 过滤掉非此 HOC 额外的 props，且不要进行透传
      const { extraProp, ...passThroughProps } = this.props;
      // 将 props 注入到被包装的组件中。
      // 通常为 state 的值或者实例方法。
      const injectedProp = this.state.name + extraProp;
      // 将 props 传递给被包装组件
      return (
        <WrappedComponent extraProp={extraProp} injectedProp={injectedProp} {...passThroughProps} />
      )
    }
  }
}

export default HOCTest2;
