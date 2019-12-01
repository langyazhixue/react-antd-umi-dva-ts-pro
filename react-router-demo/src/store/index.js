import { createStore,combineReducers, applyMiddleware } from 'redux'
import  { composeWithDevTools }from 'redux-devtools-extension'

const  initalUserinfo = {
  isLogin: false,
  user: {
    name:'小明'
  }
}


function loginReducer(state = {...initalUserinfo}, action) {
  switch(action.type) {
    case "getUserInfo" :
      return { ...initalUserinfo } ;
    case "loginSuccess" :
      return { ...state, isLogin: true };
    case "loginFailure" :
      return { ...state, isLogin:false};
      default:
      return {...state }
  }
}

const combinedReducers = combineReducers({
  user: loginReducer
})

const store =  createStore(combinedReducers,composeWithDevTools())
export default store
