import React, { Component } from 'react';
import style from './index.less';
import yay from '@/assets/yay.jpg';
// class组件通常拥有状态和 命周期，继承于Component，实现 render 法

// 组件状态管:如果组件中数据会变化，并影响  内容，则组件需要拥有状态 (state)并维护状态。
// class组件使 state和setState维护状态
// setState(object nextState[, function callback])
// 不能在组件内部通过this.state修改状态，因为该状态会在调用setState()后被替换。

// setState()并不会立即改变this.state，而是创建一个即将处理的state。setState()并不一定是同步的，为了提升性能React会批量执行state和DOM渲染。
// setState()总是会触发一次组件重绘，除非在shouldComponentUpdate()中实现了一些条件渲染逻辑。

// 替换状态：replaceState
// 但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除。

// 事件处理
// React中使 onXX写法来监听事件。
// 事件回调函数注意绑定this指向，常 三种 法:
// 1. 构造函数中绑定并覆盖:this.change= this.change.bind(this)
// 2.  法定义为箭头函数:change=()=>{}
// 3. 事件中定义为箭头函数:onChange={()=>this.change()}
// react 遵循单项数据流，没有双向绑定，输 框要设置value 和onChange，称为受控组件
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // 使用state属性维护状态，在构造函数中初始化状态
    this.state = {
      date: new Date(),
      name: 'lily',
      counter: 1,
    };
  }
  componentDidMount() {
    // 组件挂载之后启动定时 每秒 新状态
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // 组件卸载前停 定时
    clearInterval(this.timerID);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  change = e => {
    var value= e.target.value
    this.setState({
      name: value
    });
  };
  handleInputClick() {
    this.setState({
      name: '111',
    });
  }
  render() {
    const user = { firstName: 'tom', lastName: 'jerry' };
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }
    const greet = <p>hello, Jerry</p>;
    const arr = [1, 2, 3].map(num => <li key={num}>{num}</li>);
    const { date, name, counter } = this.state;
    return (
      <div className={style.myClassComtainer}>
        {/* 函数也是表达式 */}
        {formatName(user)}
        {/*jsx也是表达式*/}
        {greet}
        <ul>
          {/* 数组 */}
          {arr}
        </ul>
        {/* 属性 */}
        <img src={yay} alt="" style={{ width: 100 }} />
        <div>
          <h2>state</h2>
          {name}
          {date.toLocaleTimeString()}
          <div>{counter}</div>
        </div>

        <div>
          <h2>事件处理</h2>
          <button onClick={this.handleInputClick.bind(this)}>点击</button>
          <input type="text" placeholder="请输入" value={name} onChange={this.change} />
        </div>
      </div>
    );
  }
}
