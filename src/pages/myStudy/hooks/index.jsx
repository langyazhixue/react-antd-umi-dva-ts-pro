// 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
// Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。
// useState 是允许你在 React 函数组件中添加 state 的 Hook。
// Effect Hook 可以让你在函数组件中执行副作用操作
import React, { useState, useEffect } from 'react';
import useReducer from './useReducerHook';
import useMyCounter from './useMyCounterHook';
import MyUseContext from './useContext'

import MyCounter from './useReducer'
export default function HookSTest(props) {
  // console.log(props)
  // useState 定义了一个state变量，初始值是一个默认值
  // useState（）返回state 以及更新 state的函数
  const [counter, setCounter] = useState(0);
  // 可以是多个useEffect
  useEffect(() => {
    // const timerId = setInterval(() => {
    //   console.log('counter:update')
    // }, 1000);
    document.title = `You clicked ${counter} times`;
    console.log('counter:update');
    // return 是在 componentWillUnmount 要做的操作
    return () => {
      // clearInterval(timerId);
    };
    // [counter] 是说明在counter改变的额时候才执行
  }, [counter]);

  const [name, setName] = useState('lucy');
  // 可以是多个useEffect
  useEffect(() => {
    console.log('name:update');
    // return 是在 componentWillUnmount 要做的操作
    return () => {
      // clearInterval(timerId1);
    };
    // [name] 是说明要在name改变的时候才进入
  }, [name]);

  const [myCounter, setMyCounter] = useMyCounter();

  const reducer = function(state, action) {
    switch (action.type) {
      case 'add':
        state.counter = state.counter + 1;

        return state;
      case 'minus':
        state.counter = state.counter - 1;
        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });
const initCount = 0
  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <p>name:{name}</p>
      <button onClick={() => setName('lily')}>myCounter Click me</button>

      <div>
        <h2>自定义Hook测试</h2>
        <div>
          <p>You clicked {myCounter} times</p>
          <button onClick={() => setMyCounter(dispatch + 1)}>Click me</button>
        </div>
      </div>

      <div>
        <h2>自定义一个useReducerHook</h2>
        <div>
          <p>You clicked {state.counter} times</p>
          <button
            onClick={() =>
              dispatch({
                type: 'add',
              })
            }
          >
            add
          </button>
          <button
            onClick={() =>
              dispatch({
                type: 'minus',
              })
            }
          >
            minus
          </button>
        </div>

        <div>
          <h2>useContext测试</h2>
          <div>
            <MyUseContext/>
          </div>
        </div>

        <div>
          <h2>useReducer测试</h2>
          <div>
            <MyCounter count={initCount}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// useEffect Hook 可以让你在函数组件中执行副作用操作
// componentDidMount，componentDidUpdate 和 componentWillUnmount
// 只在最顶层使用 Hook,不要在循环，条件或者嵌套函数中调用Hook
// 我们可以在单个组件中使用多个 State Hook 或者 Effect Hook
// 那么 React 怎么知道哪个 state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序。因为我们的示例中，Hook 的调用顺序在每次渲染中都是相同的，所以它能够正常工作
// 这就是为什么 Hook 需要在我们组件的最顶层调用。如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的内部：
