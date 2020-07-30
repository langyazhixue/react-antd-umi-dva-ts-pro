import React, { Component } from 'react';

// 旧的生命周期
// 1. static defaultProps = {}
// 2 constructor
// 3. componentWillMount
// 4. render
// 5. componentDidMount
// 6. componentWillReceiveProps  父亲组件有新的props 传递下来
// 7. shouldComponentUpdate (16.4 中还保留着)
// 8  componentWillUpdate
// 9  render
// 10 componentDidUpdate
// 11 componentWillUnmount // 组件卸载前的生命周期
// 12 结束

//  生命周期变更缘由
// 原来(React v16.0前)的⽣生命周期在React v16推出的Fiber之后 就不不合适了了，
// 因为如果要开启async rendering，在render函数 之前的所有函数，都有可能被执行多次


// 16.4 以后的生命周期：
// 用 getDerivedStateFromProps 代替 componentWillReceiveProps
// componentWillMount  componentWillUpdate, componentWillReceiveProps 目前使用的话加上 UNSAFE_

// getSnapshotBeforeUpdate 在 render 事件发生在 之后
// 变更缘由：React Fiber https://zhuanlan.zhihu.com/p/26027085

import SnapshotSample from './SnapshotSample.jsx'
class Child extends Component {
  constructor(props){
    super(props)
    this.state = {
      id:'',
      name:'',
      addr:'',
      message:''
    }
  }

// 这个生命周期函数是为了替代componentWillReceiveProps存在的，
// 所以在你需要使用componentWillReceiveProps的时候，就可以考虑使用getDerivedStateFromProps来进行替代了。

// 两者的参数是不相同的，而getDerivedStateFromProps是一个静态函数，
// 也就是这个函数不能通过this访问到class的属性，也并不推荐直接访问属性。而是应该通过参数提供的nextProps以及prevState来进行判断，根据新传入的props来映射到state。

// 需要注意的是，如果props传入的内容不需要影响到你的state，那么就需要返回一个null，这个返回值是必须的，所以尽量将其写到函数的末尾。

static getDerivedStateFromProps (nextProps,prevState) {
    //返回一个对象来更新state
    console.log('11')
    const { id, name, addr } = nextProps.user
    if(id !==prevState.id || name !==prevState.name || addr !== prevState.addr) {
      return {
        ...prevState,
        id,
        name,
        addr,
        message: id + " :" + name + ":" + addr
      }
    }  else {
      return null
    }
  }
  // 在render之后，在componentDidUpdate之前
  // 新的getSnapshotBeforeUpdate生命周期在更新之前被调用(例如,在DOM被更新之前)。
  // 此生命周期的返回值将作为第三个参数传递给componentDidUpdate。
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.group('childgetSnapshotBeforeUpdate')
    console.log(prevProps)
    console.log(prevProps)
    
    return 111
  }

  componentDidUpdate(prevProps, prevState,snapshot){
    //
    console.group('childDidUpdate')
    console.log(prevProps) // 拿到上一次的prevProps
    console.log(prevState) // 拿到上一次的prevState
    console.log(snapshot) //  拿到snapshot
    console.log('chidldUpdate')
  }
  render(){
    console.log('render')
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
      <div>{this.state.message}</div>
      <Child2/>
      </div>
      
    )
  }
}

class Child2 extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      name:'北京'
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    
    return false
  }
  componentDidUpdate(prevProps,prevState){
    console.group('父组件在更新')
    console.log('正在更新')
  }
  render(){
    return (
      <div>{this.state.name}</div>
    )
  }
}
class LifeCycleTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: '1',
        name: '杭州',
        addr: 'lily',
      },
    };
  }

  // UNSAFE_componentWillMount() {
  //   console.log('willMount')
  // }

  // 组件创建时和更新时的render方法之前调 ，它应该返回一个对象来更新状态，或者返回null来不更新任何内容。
  // 这个功能实际上就是将传入的props映射到state上面
  // 当state需要从props初始化时，使用
  static getDerivedStateFromProps (nextProps,prevState) {
    console.log('11')
    return null
  }

  // componentWillReceiveProps在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发
  // 一般用于父组件状态更新时子组件的重新渲染。
  // 这种方式十分适合父子组件的互动，通常是父组件需要通过某些状态控制子组件渲染亦或销毁.
  // UNSAFE_componentWillReceiveProps(nextProps) {

  // }
  shouldComponentUpdate(nextProps,nextState) {
    // console.log(arguments)
    // 1. 主要用于性能优化(部分更新)
    // 2. 唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
    // 3. 因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断
    // 在这里return false可以阻止组件的更新
    return nextState.user.id !== this.state.user.id ||  nextState.user.name!==this.state.user.name
  }

  // UNSAFE_componentWillUpdate() {
  //   console.log('willUpdate');
  // }

  // componentDidMount(arg){
  //   console.log(arg)
  //   console.log('didMount')
  // }
  

  // 在render之后，在componentDidUpdate之前。
  // 最近一次渲染输出(提交到 DOM 节点)之前调 。
  // 它使得组件能在发生更改之前从 DOM 中捕获一些信息( 如，滚动位置)。
  // 此生命周期的任何返回值 将作为参数传递给 `componentDidUpdate`
  // 获取render之前的dom状态
  getSnapshotBeforeUpdate(prevProps, prevState){
    return 111111
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }
  handleClick = () => {
    this.setState({
      user: {
        id: '2',
        name: '杭州2',
        addr: 'lily2',
      },
    });
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        {user.name}
        {user.id}
        {user.addr}
        <div>
          <button onClick={this.handleClick}>点击</button>
        </div>
        <div>
          <h1>子组件</h1>
          <Child user={user}/>
        </div>
        <div>
          <h2>自组建2</h2>
          
        </div>
        <div>
          <h1>getSnapshotBeforeUpdate Demo</h1>
          <SnapshotSample/>
        </div>
      </div>
    );
  }
}

export default LifeCycleTest;
