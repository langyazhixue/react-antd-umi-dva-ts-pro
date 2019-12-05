export const add = () => ({ type: "add" })
export const minus = () => ({ type: "minus" })
// 异步可以返回一个函数
export const asyncAdd = () => dispatch => {
  setTimeout(() => {
    dispatch({ type: "add" })
  }, 1000)
}
