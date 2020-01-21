import { createStore, combineReducers, applyMiddleware,compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { counterReducer,testReducer } from "./counterReducer"
import  { composeWithDevTools }from 'redux-devtools-extension'
// reduxDevtoolsExtension
// 把 2个 reducer 合并到一起

// Redux 只是个纯粹的状态管理器，默认只支持同步，实现异步任务比如延迟、网络请求、需要中间件的支持，
// 比如我们试用最简单的`redux-thunk` 和 `redux-logger`
const store = createStore(
  //  combineReducers 几个 reducer都可以放在一起
  combineReducers({
    counter: counterReducer,
    test: testReducer
  }),
  // 用了一个聚合函数
  compose(applyMiddleware(logger, thunk),composeWithDevTools())
)

export default store;

