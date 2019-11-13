export function logger(midApi) {
  // 让子函数可以使用dispatch
  return dispatch => action => {
    if(action.type) {
      console.log(action.type + "执行了")
    }
    return dispatch(action)
  }
}

export function thunk({getState}) {
  // 传入的dispatch 可以是增强的dispatch
  return dispatch => action => {
    if(typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      return dispatch(action)
    }
  }
}