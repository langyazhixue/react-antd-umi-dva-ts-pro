import  { useState } from 'react';
// 自定义一个Reducer
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const nextState = reducer(state, action);
  console.log(nextState)
    setState(nextState);
  }
  return [state, dispatch];
}

export default useReducer