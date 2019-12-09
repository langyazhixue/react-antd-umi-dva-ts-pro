// import { delay } from 'redux-saga'
import { put, takeEvery , takeLatest,takeLeading,actionChannel, all,take,call,fork } from 'redux-saga/effects'
const delay = (ms) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(111)
    }, ms)
  })
}

function* helloSaga() {
  yield delay (1000)
  console.log('Hello Sagas!');
}

function* incrementAsync(...args) {
  console.log(args) // ['arg1','arg2],action]
   const res = yield delay(2000)
   console.log(res)
    yield put({
      type: 'INCREMENT'
    })
}

// function* watchIncrementAsync() {
//   yield takeLeading ('INCREMENT_ASYNC',incrementAsync,'arg1','arg2')
// }

function* watchIncrementAsync2() {
  const requestChan = yield actionChannel('INCREMENT_ASYNC')
  while(true) {
   yield take(requestChan)
    yield call(incrementAsync)
  }
}

export default function* rootSaga(...args) {
  //  可以得到`sagaMiddleware中得到的参数
  console.log(args)
   yield all ([
    helloSaga(),// 执行了helloSaga
    fork(watchIncrementAsync2),
    // watchIncrementAsync()
  ])
}