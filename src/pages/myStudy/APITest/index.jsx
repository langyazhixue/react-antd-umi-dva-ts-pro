import React, { Component } from 'react';

// 1. React.Component 是 使用 Es6 classes 方式定义 React组件的 基类
import ReactComponentTest from './React.Component';
class index extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>组件API</h2>
          <ReactComponentTest />
        </div>
      </div>
    );
  }
}

export default index;
