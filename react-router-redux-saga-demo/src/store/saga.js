// import { delay } from 'redux-saga'
import { put, takeEvery , takeLatest,takeLeading,actionChannel, all,take,call,fork,cancelled} from 'redux-saga/effects'
import { eventChannel,END,channel } from 'redux-saga'
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


// 倒计时
// 如何使用 eventChannel factory function 连接 take Effects 至外部的事件来源。
function countdown(secs) {
  return eventChannel(emitter => {
      const iv = setInterval(() => {
        secs -= 1
        if (secs > 0) {
          emitter(secs)
        } else {
          // 这里将导致 channel 关闭
          // saga被取消
          emitter(END)
        }
      }, 1000);
      // subscriber 必须回传一个 unsubscribe 函数
      return () => {
        clearInterval(iv)
      }
    }
  )
}

function* countdownSaga(value){
  const chan = yield call(countdown, value)
  try {
    while(true){
      // 也可以take 一个channel
      let seconds = yield take(chan)
      console.log(`countdown: ${seconds}`)
    }
  }
  finally {
    if(yield cancelled) {
      console.log('倒计时停止')
    }
  }
} 
// 如何使用通用的 channel factory function 创建一个 channel，并在 take/put Effects 中使用它来让两个 Saga 之间进行通信

// 需求是再同一时间内最多执行三次任务，当我们收到一个请求并执行的任务少于3个的时候，我们会立即处理请求，否则我们将任务放入队列，并等待一个`slots`完成
function* handleRequest(chan) {
  while (true) {
    const payload = yield take(chan)
    console.log(payload)
    // process the request
  }
}
function* watchRequests() {
  // 创建一个channel来队列传入的请求
  const chan = yield call(channel)
  // 创建 3 个 worker 'threads'
  for(var i = 0; i < 3; i ++) {
    yield fork(handleRequest,chan)
  }
  while(true) {
    const {payload} = yield take('REQUEST')
    yield put(chan, payload)
  }
}

export default function* rootSaga(...args) {
  //  可以得到`sagaMiddleware中得到的参数
  console.log(args)
   yield all ([
    helloSaga(),// 执行了helloSaga
    fork(watchIncrementAsync2),
    countdownSaga(3),
    watchRequests
    // watchIncrementAsync()
  ])
}

