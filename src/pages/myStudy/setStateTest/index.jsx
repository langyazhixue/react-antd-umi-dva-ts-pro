import React, { Component } from 'react';

// setState是批量执行的，因此对同一个状态执行多次只起一次作用 ，多个状态更新可以放在同一个setState中进行
// setState通常是异步的，因此如果要获取到最新状态值有以下三种方式
// 1. 传递函数给setState方法
// setState只有在合成事件和生命周期函数中是异步的，在原生事件如addEventListener和setTimeout、setInterval中都是同步的。
// 为什么setState只有在React合成事件和生命周期数中是异步的，在原 事件和setTimeout、setInterval、 addEventListener中都是同步的?
// 原生事件绑定不会通过合成事件的方式处理 ， 自然也不步会进入新事务的处理流程。setTimeout也 样，
// 在setTimeout回调执  时已经完成 原更 新组件流程，也 不会再进 入异步 新流程， 其结果自 然就是是同步的 。
class SetStateTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    // 假如couter初始值为0，执 三次以后其结果是多少?
    // this.setState({counter: this.state.counter + 1});
    // this.setState({ counter: this.state.counter + 2 });

    // this.setState((nextState, props) => {
    //   console.log(nextState); // 0
    //   return {
    //     counter: this.state.counter + 1,
    //   };
    // });
    // this.setState((nextState, props) => {
    //   console.log(nextState); // 1
    //   return {
    //     counter: this.state.counter + 1,
    //   };
    // });
    // this.setState((nextState, props) => {
    //   console.log(nextState); // 1
    //   return {
    //     counter: this.state.counter + 1,
    //   };
    // })

    setTimeout(() => {
      this.changeValue();
      console.log(this.state.counter);
    }, 0);
    // setTimeout 是宏任务
    setTimeout(() => {
      this.changeValue();
      this.changeValue();
      console.log(this.state.counter);
    }, 1000);

    document.getElementById('button').addEventListener('click', this.changeValue, false)
  }
  changeValue = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log(this.state.counter);
  };
  render() {
    return (
      <div>
        setState 新状态 能直接修改
        <p>
          setState是批 执 的，因此对同 个状态执 多次只起 次作 ，多个状态 新可以放在同 个setState中进{' '}
        </p>
        <div>{this.state.counter}</div>
        <div>
          <button  id= 'button'>点击</button>
        </div>
      </div>
    );
  }
}

export default SetStateTest;
