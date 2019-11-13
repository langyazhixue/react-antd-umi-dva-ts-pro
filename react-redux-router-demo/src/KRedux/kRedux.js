// 核心状态存储
// 1. 存储状态state
// 2. 获取状态getState
// 3. 更新状态dispatch
// 4. 变更订阅subscribe

export function createStore(reducer,enhancer) {
  if(enhancer) {
    // 如果有中间件，就走中间件了
    return enhancer(createStore)(reducer)
  }
  // 保存状态
  let currentState = undefined

  // 回调函数
  let currentListeners = []

  function getState(){
    return currentState
  }
  function subscribe(listener){
    currentListeners.push(listener)
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(v => v())
    return action   
  }
  dispatch({type:'@IMOOC/KKB-REDUX'}) // 为了展示初始值
  return {
    getState,
    subscribe,
    dispatch
  }
}

// 中间件实现
// 核心任务是实现函数序列执行

// const store = createStore(
//   combineReducers({
//     counter: counterReducer,
//   }),
//   applyMiddleware(logger, thunk),
// );
// 

// function f1(x) {
//   console.log(x)
//   console.log("f1")
//   return x
// }
// function f2(y) {
//   console.log(y)
//   console.log("f2")
//   return y
// }
// function f3(z) {
//   console.log(z)
//   console.log("f3");
//   return z
// }


export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) =>
    b(a(...args))
  )
}
// 输出 1， 2， 3
// 之前的函数的执行结果是后面函数的参数
// let res = compose(f1,f2,f3)('tt')

export function applyMiddleware(...middlewares) {
  return createStore =>(...args) => {
    const store = createStore(...args)
    let dispatch = store.dispatch
    const midApi = {
      getState: store.getState,
      dispatch: store.dispatch,
    }
    // 使中间件可以获取状态值，派发action
    const middlewareChain = middlewares.map(middleware => middleware(midApi))
    // compose 可以把 middlewareChain 函数数组合并成一个函数
    // 重写了dispatch 函数
    // dispatch 函数是原来的dispatch函数
    // 增强了dispatch 函数的能力
    dispatch = compose(...middlewareChain)(dispatch)
    return {
      ...store,
      dispatch
    }
  }
}



// 自己写一些中间件来实现
// 比方说logger
// function logger(midApi){
//   return dispatch => action => {
//     if(action.type) {
//       console.log(action.type + "执行了")
//     }
//     return dispatch(action)
//   }
// }

