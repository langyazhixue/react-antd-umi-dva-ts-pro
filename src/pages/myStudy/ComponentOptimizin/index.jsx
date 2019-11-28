import React, { Component, PureComponent, memo } from 'react';

// 常见的组件优化技术
// 之所以react推荐在componentDidMount钩子中使用而不是componentWillMount的原因：
// 因为请求是异步的，所以无论你放在两个中的任何一个里面，几乎绝对都会在组件渲染之后，再进行数据渲染，
// 也就是说避免不了二次渲染(第一次渲染为默认值，第二次为请求后的数据渲染)，所以效果上放到哪里都一样，
// 但是在DidMount中可以使用refs了。然后重要的是（是在Stack Overflow中的回答看到）：未来的react版本可能会对componentWillMount进行调整，可能在某些情况下触发多次，所以官方是推荐在componentDidMount中进行请求。 当然放到willMount中可能会快那么几毫秒，毕竟先运行嘛。。。

// 核心：只渲染需要被渲染的组件
// 1. shouldComponentUpdate钩子
// 2. PureComponent
class Commnet extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { author, body } = this.props.data;

    const { author: newAuthor, body: newBody } = nextProps.data;

    if (author === newAuthor && body === newBody) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log('rerender');
    const { author, body } = this.props.data;
    return (
      <div className="border">
        <p>{author}</p>
        <p>{body}</p>
      </div>
    );
  }
}
class CommentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        commentList: [
          {
            id: 0,
            author: '⼩小明',
            body: '这是⼩小明写的⽂文章',
          },
          {
            id: 1,
            author: '⼩小红',
            body: '这是⼩小红写的⽂文章',
          },
        ],
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    const { commentList } = this.state;
    return (
      <div>
        <h1>CommentListPage</h1>
        {commentList.map(item => {
          return <Commnet key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

// 2. PureComponet
// 3. 缺点是必须要⽤用class形式，⽽而且要注意是浅⽐比较
class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  setcounter = () => {
    console.log('click')
    this.setState({
      counter: 100,
    });
  };
  render() {
    const { counter } = this.state
    console.log('PureComponent render')
    return (
      <div>
        <h1>PureComponentPage</h1>
        <div onClick={this.setcounter}>counter: {counter}</div>
      </div>
    );
  }
}


// 3. React.memo 
// React.memo(...)是ReactV16.6引进来的新属性，是一个高阶组件。它的作用和React.PureComponent类似
// 是用来控制函数组件的重新渲染
// React.memo(...) 其实就是函数组件的    React.PureComponent


class ReactMemoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 0
    }
  }
  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({
        date:new Date()
      })
    },1000)
  }

  componentWillUnmount(){
    if(this.timer) {
      clearInterval(this.timer)
    }
  }
  render(){
    const { counter, date } = this.state
    return (
      <div>
         <h1>ReactMemoPage</h1>
        <p>{date.toLocaleTimeString()}</p>
        <MemoCounter counter={counter} />
      </div>
    )
  }
}

const MemoCounter = memo(props => {
  console.log("MemoCounter");
  return <div>{props.counter}</div>;
})

class ComponentOptimizing extends Component {
  render() {
    return (
      <div>
        <CommentListPage />
        <PureComponentPage/>
        <ReactMemoPage/>
      </div>
    );
  }
}

export default ComponentOptimizing;
