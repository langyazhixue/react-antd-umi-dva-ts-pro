// redux import { queryNotices } from '@/services/api';

export default {
  namespace: 'global',
  state: {
    // 全局数据
    entName: "",
    expire: "",
    refreshExpire: "",
    refreshToken: "",
    token: "",
    userId: "",
    userName: ""
  },
  effects: {
    // *fetchNotices(_, { call, put, select }) {
    //   const data = yield call(queryNotices);
    //   yield put({
    //     type: 'saveNotices',
    //     payload: data,
    //   });
    //   const unreadCount = yield select(
    //     state => state.global.notices.filter(item => !item.read).length
    //   );
    //   yield put({
    //     type: 'user/changeNotifyCount',
    //     payload: {
    //       totalCount: data.length,
    //       unreadCount,
    //     },
    //   });
    // },
    // *clearNotices({ payload }, { put, select }) {
    //   yield put({
    //     type: 'saveClearedNotices',
    //     payload,
    //   });
    //   const count = yield select(state => state.global.notices.length);
    //   const unreadCount = yield select(
    //     state => state.global.notices.filter(item => !item.read).length
    //   );
    //   yield put({
    //     type: 'user/changeNotifyCount',
    //     payload: {
    //       totalCount: count,
    //       unreadCount,
    //     },
    //   });
    // },
    // *changeNoticeReadState({ payload }, { put, select }) {
    //   const notices = yield select(state =>
    //     state.global.notices.map(item => {
    //       const notice = { ...item };
    //       if (notice.id === payload) {
    //         notice.read = true;
    //       }
    //       return notice;
    //     })
    //   );
    //   yield put({
    //     type: 'saveNotices',
    //     payload: notices,
    //   });
    //   yield put({
    //     type: 'user/changeNotifyCount',
    //     payload: {
    //       totalCount: notices.length,
    //       unreadCount: notices.filter(item => !item.read).length,
    //     },
    //   });
    // },
  },
  reducers: {
    saveUserData(state, { payload }) {
      return Object.assign({},state,payload)
    },
  },
  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
