// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案
// 在 react v 16 之后出现的portal 可以实现内容传送功能

// 弹窗类组件的要求弹窗内容在A处声明，却在B处展示
// react中相当于弹窗内容看起来被render到 一个组件里面去，实际改变的是网页上另一处的DOM结构，
//  这个显然 不符合正常逻辑。但是通过使用框架提供的特定API创建组件实例并指定挂载目标仍可完成任务。

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './index.less';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.doc = window.document;
    this.node = this.doc.createElement('div');
    this.node.id = 'dialog'
  }
  componentDidMount(){
    this.doc.body.appendChild(this.node);
  }
  componentWillUnmount(){
    this.doc.body.removeChild(this.node)
  }
  render() {
    const { hideDialog } = this.props;
    return createPortal(
      <div className={styles.dialog}>
        {this.props.children}
        {typeof hideDialog === 'function' && <button onClick={hideDialog}>隐藏</button>}
      </div>
    ,this.node);
  }
}
