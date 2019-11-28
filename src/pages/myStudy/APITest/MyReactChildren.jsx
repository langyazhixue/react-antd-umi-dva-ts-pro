import React, { Component } from 'react';


// 1. React.Children
// React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法。
// React.Children.map(children, function[(thisArg)])
// 在 children 里的每个直接子节点上调用一个函数，并将 this 设置为 thisArg。如果 children 是一个数组，
// 它将被遍历并为数组中的每个子节点调用该函数， 如果子节点为 null 或是 undefined，则此方法将返回 null 或是 undefined，而不会返回数组。
// 如果 children 是一个 Fragment 对象，它将被视为单一子节点的情况处理，而不会被遍历

// 2. React.Children.forEach(children,function[(thisArg)]) ，跟  React.Children 类似，但它不会返回一个数组。

// 3. React.Children.count 
// 返回 children 中的组件总数量，等同于通过 map 或 forEach 调用回调函数的次数

// 4. React.Children.only
// 验证 children 是否只有一个子节点（一个 React元素），如果有则返回它，否则此方法会抛出错误。

// 5. React.Children.toArray
// React.Children.toArray(children)

class Dialog extends Component {
  render(){
    const { children } = this.props
    const childrenList = React.Children.map(children, (child) => {
      // 可以加入一些新的props 
      console.group('child')
      console.log(child)
      return React.cloneElement(child,{
        id:'test'
      })
    })
    return (
      <div className='dialog-container'>
        {childrenList}
      </div>  
    )
  }
}

function SubItem (props) {
  return (
    <li id={props.id}>{props.name}</li>
  )
}

class MyReactChildren extends Component {
  render() {
    return (
      <div>
        <Dialog>
          <div>test</div>
          <SubItem name='lily'/> 
          <SubItem name='lili'/>       
        </Dialog>
        <Sort>
        {'bananas'}{'oranges'}{'apple'}
        </Sort>
      </div>
    );
  }
}

// React.Children.toArray
// 将 `children` 这个 复杂的 数据结构以数组的方式扁平展开并返回，并为每个子节点分配一个key
class Sort extends React.Component {
  render() {
    const children = React.Children.toArray(this.props.children)
    // Sort and render the children
    return <p>{children.sort().join(' ')}</p>
  }
}
export default MyReactChildren;