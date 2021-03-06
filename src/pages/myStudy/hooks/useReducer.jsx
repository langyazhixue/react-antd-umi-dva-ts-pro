// const [state, dispatch] = useReducer(reducer, initialArg, init);

// useReducer 

// useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法

// useCallback 

import React, { useReducer} from 'react'



function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state
  }
}

// const initialState = {count: 0};
// 传入一个初始值
function init(initialArg){
  return {
    count: initialArg
  }
}
function Counter(initialCount){
  // 可以通过2中方式来 初始化 默认值
  // const [state, dispatch] = useReducer(reducer,initialState)
  console.log(initialCount)
  // 解构赋值
  const [state, dispatch] = useReducer(reducer,initialCount.count,init)
  // const memoizedCallback = useCallback(
  //   (v) => {
  //     console.log(v)
  //     console.log(state)
  //   },
  //   [state]
  // )

  // console.log(memoizedCallback)
  return (
    <React.Fragment>
      <h2>测试useReducer</h2>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </React.Fragment>
  )
}
export default Counter