
import { combineReducers } from 'redux'
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

function countReducer(state = 0, action) {
  switch(action.type) {
    case "INCREMENT" :
      return state + 1
    case "DECREMENT" :
      return state -1
      default:
      return state
  }
}
export default function createReducer(asyncReducers) {
  return combineReducers({
    user: loginReducer,
    count: countReducer,
    ...asyncReducers,
  })
} 
