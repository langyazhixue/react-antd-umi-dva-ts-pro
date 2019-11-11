import React, { Component } from 'react';
import { connect } from 'react-redux'
import { add, minus,asyAdd } from './store/action'
import store from './store/reactReduxStore'
class ReactReduxStore extends Component {
  render() {
    console.log("omg", this.props);
    const { counter, add, minus, asyAdd } = this.props;
    return (
      <div>
        <h1>ReactReduxPage</h1>
        <p>{counter}</p>
        <button onClick={() => store.dispatch({ type: "add" })}>add</button>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={asyAdd}>asyAdd</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({ counter: state.counter })
}
// 两种mapDispatchToProps的形式
// 1. 函数形式：更高自由度、能够访问dispatch和可选择的ownProps
// 2. 对象形式
// const mapDispatchToProps = {
//   add,
//   minus,
//   asyAdd
// }

const mapDispatchToProps = (dispatch) => {
  return {
    add:() =>  dispatch({type: "add"}),
    minus:() => dispatch({ type: "minus" }),
    asyAdd: () => {
      setTimeout(() => {
        dispatch({ type: "add" });
      }, 1000);
    }
  }
}
// connect 返回一个新函数，可以接收一个等待包装的组件
export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxStore)