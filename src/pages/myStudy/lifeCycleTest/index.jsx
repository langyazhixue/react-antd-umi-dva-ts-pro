import React, { Component } from 'react';

// 旧的生命周期
// 1. static defaultProps = {}
// 2 constructor
// 3. componentWillMount
// 4. render
// 5. componentDidMount
// 6. componentWillReceiveProps  父亲组件有新的props 传递下来
// 7. shouldComponentUpdate
// 8 componentWillUpdate
// 9 render
// 10 componentDidUpdate
// 11 componentWillUnmount
// 12 结束

// 16.4 以后的生命周期：
// 用 getDerivedStateFromProps 代替
// componentWillMount componentWillReceiveProps componentWillUpdate, 目前使用的话加上 UNSAFE_

// getSnapshotBeforeUpdate 代替 shouldComponentUpdate
// 变更缘由：React Fiber https://zhuanlan.zhihu.com/p/26027085

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
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.group('childgetSnapshotBeforeUpdate')
    console.log(prevProps)
    console.log(prevProps)
    return 111111
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
    console.log(this.props)
    console.log(this.state)
    return (
      <div>{this.state.message}</div>
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
  // 组件创建时和更新时的render 法之前调 ，它应该返回一个对象来更 新状态，或者返回null来不更新任何内容。
  // 这个功能实际上就是将传入的props映射到state上面
  // 当state需要从props初始化时，使用
  static getDerivedStateFromProps (nextProps,prevState) {
    console.log('11')
    return null
  }

  // 在render之后，在componentDidUpdate之前。
  // 最近一次渲染输出(提交到 DOM 节点)之前调 。
  // 它使得组件能在发生更改之前从 DOM 中捕获一些信息( 如，滚动位置)。
  // 此生命周期的任何返回值 将作为参数传递给 `componentDidUpdate`
  // 获取render之前的dom状态
  getSnapshotBeforeUpdate(prevProps, prevState){
    return 111111
  }

  // componentDidMount(arg){
  //   console.log(arg)
  //   console.log('didMount')
  // }
  // UNSAFE_componentWillMount() {
  //   console.log('willMount')
  // }


  // componentWillReceiveProps在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发
  // 一般用于父组件状态更新时子组件的重新渲染。
  // 这种方式十分适合父子组件的互动，通常是父组件需要通过某些状态控制子组件渲染亦或销毁.
  // UNSAFE_componentWillReceiveProps(nextProps) {

  // }
  shouldComponentUpdate(nextProps,nextState) {
    // console.log(arguments)
    return nextState.user.id !== this.state.user.id ||  nextState.user.name!==this.state.user.name
  }

  // UNSAFE_componentWillUpdate() {
  //   console.log('willUpdate');
  // }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }
  handleClick = () => {
    this.setState({
      user: {
        id: '2',
        name: '杭州',
        addr: 'lily',
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
      </div>
    );
  }
}

export default LifeCycleTest;
