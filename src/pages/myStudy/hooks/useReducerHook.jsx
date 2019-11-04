import  { useState } from 'react';
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