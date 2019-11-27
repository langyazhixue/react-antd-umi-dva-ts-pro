import React, { Component, useState, useMemo, useCallback, useEffect } from 'react';

// React.memo(...) 是 React 16.6引进来的新属性，是一个高阶组件。它的作用和`React.PureComponent`类似，
// 是用来控制函数组件的重新渲染的
// React.memo(...)其实就是函数组件的 React.PureComponent
// 只要父组件的render了，那么默认情况下就会触发子组件的render过程，子组件的render过程又会触发它的子组件的render过程，
// 一直到React元素（即jsx中的<div>这样的元素）。当render过程到了叶子节点，即React元素的时候，diff过程便开始了，
// 这时候diff算法会决定是否切实更新DOM元素。

class MemoTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
    };
  }
  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.setState({
    //     date: new Date(),
    //     // counter:  this.state.counter + 1
    //   });
    // }, 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>ReactMemoPage</h1>
        <p>{this.state.date.toLocaleTimeString()}</p>
        <MemoCounter counter={this.state.counter} />
        <div>
          <h2>测试useMemo</h2>
          <div>
            <WithUseMemo />
          </div>
        </div>
        <div>
          <h2>测试useCallback</h2>
          <div>
            <WidhtUseCallback />
          </div>
        </div>
        <div>
          <h2>另外一个useCallback</h2>
          <div>
            <WithUseCallbackParent/>
          </div>
        </div>
      </div>
    );
  }
}

// 要让自组件不更新
// React.memo 是一个高阶组件
// 是做的一个浅比较
const MemoCounter = React.memo(props => {
  console.log(props.counter);
  return <div>{props.counter}</div>;
});

// useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。
function WithUseMemo() {
  // 在val修改的时候，是没有必要再次计算的。
  // 所以需要useMemo

  const [count11, setCount11] = useState(1);
  const [val, setValue] = useState('');
  // 类似于Vue的computed
  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count11 * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count11]);
  // 使用useMemo来执行昂贵的计算，然后将计算值返回，
  // 并且将count作为依赖值传递进去。这样，就只会在count改变的时候触发expensive执行，在修改val的时候，返回上一次缓存的值。
  return (
    <div>
      <h4>
        {count11}-{expensive}
      </h4>
      {val}
      <div>
        <button onClick={() => setCount11(count11 + 1)}>+c1</button>
        <input value={val} onChange={event => setValue(event.target.value)} />
      </div>
    </div>
  );
}

const MySet = new Set();

function WidhtUseCallback() {
  const [count22, setCount22] = useState(1);
  const [val, setVal] = useState('');
  const callback = useCallback(() => {
    console.log(count22);
  }, [count22]);
  // console.log('111')
  MySet.add(callback);
  // 每次修改count，set.size就会+1，这说明useCallback依赖变量count，count变更时会返回新的函数；而val变更时，
  // set.size不会变，说明返回的是缓存的旧版本函数。
  return (
    <div>
      <h4>{count22}</h4>
      <h4>{MySet.size}</h4>
      <div>
        <button onClick={() => setCount22(count22 + 1)}>+</button>
        <input value={val} onChange={event => setVal(event.target.value)} />
      </div>
    </div>
  );
}


// useCallback 的使用场景
// 有一个父组件，其中包含子组件，子组件接收一个函数作为props；通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，
// 我们可以借助useCallback来返回函数，然后把这个函数作为props传递给子组件；这样，子组件就能避免不必要的更新

function WithUseCallbackParent() {
  const [count33, setCount33] = useState(1);
  const [val1, setVal1] = useState('');
  const callback = useCallback(() => {
      // 执行的值就是返回值
      return count33;
  }, [count33]);
  return <div>
      <h4>{count33}</h4>
      <Child callback={callback}/>
      {/* <Child count33={count33}/> */}
      <div>
          <button onClick={() => setCount33(count33 + 1)}>+</button>
          <input value={val1} onChange={event => setVal1(event.target.value)}/>
      </div>
  </div>;
}

function Child({ callback }) {
  // 说明当count3执行的时候，callback也修改了
  const [count44, setCount44] = useState(() => callback());
  useEffect(() => {
    console.log('useCallback')
    setCount44(callback());
  }, [callback]);
  return <div>
      {count44}
  </div>
}
export default MemoTest;
