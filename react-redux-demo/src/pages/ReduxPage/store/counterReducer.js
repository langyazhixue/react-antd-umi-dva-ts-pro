// reducer 就是⼀一个纯函数，接收旧的 state 和 action，返回新的 state， 相同的输入肯定有相同的输出
// 永远不要在reducer
// 1. 修改传入参数
// 2. 执行有副作用的操作，如API请求和路由跳转
// 3. 调用非纯函数，如 Date.now() 或者 Math.random()
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default :
      return state
  }
}

export function testReducer(state = 0, action) {
  switch (action.type) {
    case "test/add":
      return state + 1;
    case "test/minus":
      return state - 1;
    default:
      return state;
  }
}

