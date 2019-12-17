export default {
  namespace: 'example',
  state: {
    title: 'dva-demo'
  },
  subscriptions: {
    // 相当于一个监听器
    // 在这个subsription中的方法名是随意定的，
    // 每次变化都会一次去调用里面的所有方法，所以一边会加相应的判断。
    // 可以监听路由变化，鼠标，键盘变化，服务器连接变化，状态变化等
    test({dispatch, history}) {
    },
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log()
    },
    setupHistory({dispatch,history}){
      history.listen((location) => {
        console.log(location)   //这里可以获取当前变化的history路径以及参数，hash所有值，这样就可以在路由地址变化后做处理
      })
    }
  },
  effects: {
    // *是代表Generate函数
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save',payload })
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
