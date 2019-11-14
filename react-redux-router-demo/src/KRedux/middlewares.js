// redux-thunk 这些支持异步的middleware都包装了store的dispatch()方法
// middleware的概念：
// 如果你使用过Express 或者 Koa 等服务框架，应该对middleware的概念很清楚
// Express 或者 Koa 中的middleware可以完成添加CORS,headers,记录日志，内容压缩等工作
// middleware 中最优秀的特性是可以被链式组合
// Redux middleware 提供的作用是 位于action 被发起之后，到达reducer之前的扩展点。
// 可以利用middleware来进行日志记录，创建报告，调用异步接口或者路由等
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