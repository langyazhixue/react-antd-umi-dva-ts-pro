import { createStore,applyMiddleware } from "../../../KRedux/kRedux";
import { counterReducer } from "./counterReducer";
import { logger,thunk } from '../../../KRedux/middlewares'
const store = createStore(counterReducer,applyMiddleware(logger,thunk))

export default store;