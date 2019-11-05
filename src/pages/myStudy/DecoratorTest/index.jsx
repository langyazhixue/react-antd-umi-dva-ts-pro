import React, { Component } from 'react';

const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp  {...props}/>
    </div>
  );
};

const foo2 = Cmp => props => {
  return (
    <div className="border" style={{ border: 'green 1px solid' }}>
      <Cmp {...props}/>
    </div>
  );
};

// 装饰器器只能⽤用在class上
// 执⾏行行顺序从下往上
@foo2
@foo
class Child extends Component {
  render() {
    return <div className="border">Child1111</div>;
  }
}

class DecoratorTest extends Component {
  render() {
    return <Child />;
  }
}

export default DecoratorTest;
