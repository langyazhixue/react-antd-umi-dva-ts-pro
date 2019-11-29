// import { createStore, combineReducers, applyMiddleware } from "redux"
// import logger from "redux-logger"
// import thunk from "redux-thunk"
// import { counterReducer } from "./counterReducer"

// // 把 2个 reducer 合并到一起

// // Redux 只是个纯粹的状态管理器，默认只支持同步，实现异步任务比如延迟、网络请求、需要中间件的支持，
// // 比如我们试用最简单的`redux-thunk` 和 `redux-logger`
// const store = createStore(
//   combineReducers({
//     counter: counterReducer,
//   }),
//   // 用了一个聚合函数
//   applyMiddleware(logger, thunk)
// )

// export default store;


import { createStore,applyMiddleware } from "../../../KRedux/kRedux";
import { counterReducer } from "./counterReducer";
import { logger,thunk } from '../../../KRedux/middlewares'
const store = createStore(counterReducer,applyMiddleware(logger,thunk))

export default store;