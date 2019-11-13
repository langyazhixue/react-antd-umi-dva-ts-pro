import React, { Component } from 'react';
import PropTypes from 'prop-types'

// getChildContext：与访问context属性需要通过contextTypes指定可访问的属性一样，
// getChildContext指定的传递给子组件的属性需要先通过childContextTypes来执行，不然会报错。
class GetChildContext extends Component {
  static childContextTypes = {
    name:PropTypes.string
  }
  getChildContext(){
    return {
      name:'lily'
    }
  }
  render() {
    return (
      <div>
        <h2>测试</h2>
        <ChildB/>
      </div>
    );
  }
}

class ChildB extends Component {
  //在子组件中用于说明context接收的数据类型
  static contextTypes =  {
    name: PropTypes.string
  }
  render() {
    console.log(this.context)
    return (
      <div>
        <ChildC/>
        <div>My favorite fruit is: {this.context.name}</div>;
      </div>
     
    )
  }
}


class ChildC extends Component {
  //在子组件中用于说明context接收的数据类型
  static contextTypes =  {
    name: PropTypes.string
  }
  // 可以接收到 this.context
  render() {
    console.log(this.context)
    return (
      <div>
        <div>My favorite fruit is: {this.context.name}</div>;
      </div>
    )
  }
}
export default GetChildContext;