import React, { Component } from 'react';

// setState是批量执行的，因此对同一个状态执行多次只起一次作用 ，多个状态更新可以放在同一个setState中进行
// setState通常是异步的，因此如果要获取到最新状态值有以下三种方式
// 1. 传递函数给setState方法
// setState只有在合成事件和生命周期函数中是异步的，在原生事件如addEventListener和setTimeout、setInterval中都是同步的。
// 为什么setState只有在React合成事件和生命周期数中是异步的，在原 事件和setTimeout、setInterval、 addEventListener中都是同步的?
// 原生事件绑定不会通过合成事件的方式处理,自然也不步会进入新事务的处理流程。setTimeout也一样，// setTimeout属于宏任务
// 在setTimeout回调执行时已经完成了原更新新组件流程，也不会再进入异步更新流程， 其结果自然就是是同步的 。
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

    document.getElementById('button').addEventListener('click', this.changeValue, false);
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
          <button id="button">点击</button>
        </div>
        <div>
          <Child />
        </div>
      </div>
    );
  }
}

// setState通通常是异步的，因此如果要获取到最新状态值有以下3中方式
// 1. 传递函数给setState方法
//
// this.setState((nextState, props) => ({
//   counter: state.counter + 1}));// 1
//  this.setState((nextState, props) => ({
//   counter: state.counter + 1}));// 2
//  this.setState((nextState, props) => ({
//   counter: state.counter + 1}));// 3

// 2. 使用定时器
//
// setTimeout(() => {
//   this.changeValue();
//    console.log(this.state.counter);
//  }, 0);

// 3. 原声事件中修改状态
//
// componentDidMount(){
//   document.body.addEventListener('click',
// this.changeValue, false)
// }

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handlerSetState = () => {
    this.setState((prevState, props) => {
      console.log(prevState);
      let counter = this.state.counter + 1; // 在这里可以获取到最新值
      return {
        counter,
      };
    });
    console.log(this.state.counter); // 同步的
    //  this.setState((nextState, props) => ({
    //   counter: this.state.counter + 1}));// 2
    //  this.setState((nextState, props) => ({
    //   counter: this.state.counter + 1}));// 3
  };

  handlerSetTimeout = () => {
    setTimeout(() => {
      this.changeValue();
      console.log(this.state.counter); // 可以同步获取到更新的值
    }, 0);
  };
  changeValue = () => {
    this.setState({
      counter: 10
    });
  };
  render() {
    return (
      <div>
        <h2>setState通常是异步的，因此如果要获取到最新状态值有 以下三种⽅方式:</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.handlerSetState}>setState修改</button>
        <button onClick={this.handlerSetTimeout}>setTimeout修改</button>
      </div>
    );
  }
}
export default SetStateTest;
