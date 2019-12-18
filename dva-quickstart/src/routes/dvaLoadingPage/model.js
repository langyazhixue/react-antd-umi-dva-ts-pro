
const delay = (ms) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default {
  namespace: 'dvaLodingTest',
  state: {
    count: 0
  },
  effects: {
    *changeCountAsync({payload}, {call, put }) {
      yield delay(3000)
      yield put({
        type:'changeCount',
        payload
      })
    }
  },
  reducers : {
    changeCount(state, action) {

      const count = state.count + 1
      return {
        ...state,
        count
      }
    }
  }
}