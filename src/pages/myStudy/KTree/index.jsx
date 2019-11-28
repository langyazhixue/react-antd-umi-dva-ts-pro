import React, { Component } from 'react';
// React树组件设计思路
// 递归：自己调用自己
// react中实现递归组件更加纯粹，就是组件递归渲染即可。
// 假设我们的节点组件是TreeNode，它的render中只要发现当前节点拥有子节点就要继续渲染
// 子节点的打开状态可以通过给组件一个open状态来维护。

import KTreeNode from './kTreeNode.jsx'
import './index.less'
const treeData = {
  key: '1', // 
  title:'全国',
  children:[
    {
      key: '1-1',
      title:'北方',
      children:[
        {
          key: '1-1-1',
          title:"黑龙江"
        },
        {
          key: '1-1-2',
          title:222
        }
      ]
    },
    {
      key: '1-2',
      title:'南方',
      children:[
        {
          key: '1-2-1',
          title:"上海"
        },
        {
          key: '1-2-2',
          title:'南京'
        }
      ]
    }
  ]
}

class index extends Component {
  render() {
    return (
      <div>
        <h1>树形组件名字</h1>
        <KTreeNode data={treeData} />
      </div>
    );
  }
}

export default index;
