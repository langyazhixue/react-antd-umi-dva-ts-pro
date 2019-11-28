import React, { Component } from 'react';

// 链式调用
function Child(props) {
  console.log(props)
  return <div style={{color:'green'}}>Child</div>;
}

const foo = Cmp => props => {
  return (
    <div style={{backgroundColor:'red'}}>
      <Cmp {...props} />
    </div>
  )
}

const foo2 = Cmp => props => {
  return (
    <div style={{backgroundColor:'green'}}>
      <Cmp {...props} />
    </div>
  )
}

class ChainTest extends Component {
  render() {
    const Foo = foo2(foo(Child))
    return <div>
      <Foo name='chain' />
    </div>
  }
}

export default ChainTest;
