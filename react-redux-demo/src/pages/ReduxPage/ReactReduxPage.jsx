import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { add, minus, asyncAdd } from './store/action'
import store from './store/reactReduxStore'
// dispatch 
class ReactReduxStore extends Component {
  render() {
    console.log("omg", this.props)
    const { counter, add, minus, asyncAdd } = this.props
    return (
      <div>
        <h1>ReactReduxPage</h1>
        <p>{counter}</p>
        <button onClick={() => store.dispatch({ type: "add" })}>原生add</button>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={asyncAdd}>asyncAdd</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.group('state')
  console.log(state)
  return ({ counter: state.counter })
}
// 两种mapDispatchToProps的形式
// 1. 函数形式：更高自由度、能够访问dispatch和可选择的ownProps
// 2. 对象形式

// const mapDispatchToProps = {
//   add,
//   minus,
//   asyncAdd
// }

// 函数形式：更高自由度、能够访问dispatch和可选择的ownProps
const mapDispatchToProps = (dispatch,ownProps) => {
  console.log(ownProps)
  return {
    add:() =>  dispatch({type: "add"}),
    minus:() => dispatch({ type: "minus" }),
    asyncAdd: () => {
      setTimeout(() => {
        dispatch({ type: "add" })
      }, 1000)
    }
  }
}
const mergeProps = (stateProps, dispatchProps, ownProps)  =>{
return Object.assign({},ownProps,stateProps,dispatchProps)
}
// connect 返回一个新函数，可以接收一个等待包装的组件
// connect 是一个返回高阶函数的函数

export default connect(mapStateToProps, mapDispatchToProps,mergeProps)(ReactReduxStore)