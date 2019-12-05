import { createStore,compose,applyMiddleware } from 'redux'
import createReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import * as reduxSaga from 'redux-saga'
import  { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './saga'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
console.log(reduxSaga)
console.log(reduxSaga.runSaga)
export default  function configureStore(intialState) {
  const sagaMiddleware = createSagaMiddleware({
    // 用于从redux 向 redux-saga 进给 actions
    emitter: emit => action => {
      if (Array.isArray(action)) {
        action.forEach(emit);
        return
      }
      emit(action);
     },
     logger:(level, ...args) => {
       if(level ==='error') {
         console.log(args.join(','))
       }
     },
     onError: (e) => {
      console.log(e)
     }
  })
  const middlewares = [sagaMiddleware]
  // enhancers列表
  const enhancers = [
    applyMiddleware(...middlewares),
    composeWithDevTools()
  ]

  // 生成store
  const store =  createStore(createReducer(),{...intialState},compose(...enhancers))

  //挂载异步reducers
  store.asyncReducers = {}
  const nextReducers = createReducer(store.asyncReducers)

  // 替换reducers
  store.replaceReducer(nextReducers)
  store.runSaga = sagaMiddleware.run
  // 运行 saga
  const sagaRes = store.runSaga(rootSaga,'test')
  console.log(sagaRes)
  return store
}

