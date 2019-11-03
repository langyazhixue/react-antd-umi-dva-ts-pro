import React, { Component } from 'react';

// Props属性传递可 于  组件相互通信
// 如果 组件传递的是函数，则可以把 组件信息传  组件，这 个常称为状态提升，StateMgt.js
// context 跨层级组件之间通信
// redux:
class Child extends Component{
  // constructor(props) {
  //   super(props)
  // } 类似vuex， 明显关系的组件间通信
  render(){
    return (
      <div>
        <p> {this.props.title}</p>
        <p>
          <button onClick= {this.props.handlerClick}>点击</button>
        </p>
      </div>
    )
  }
}
class CommunicationTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title:'开课吧'
    }
  }
  handlerClick = () =>{
    this.setState({
      title:'木渴望'
    })
  }
  render() {
    const { title } = this.state
    return (
      <div>
          <h1>props属性传递</h1>
          <Child title={title} handlerClick = {this.handlerClick}/>
          <h1>context</h1>
          <h1>redux</h1>
      </div>
    );
  }
}

export default CommunicationTest;
