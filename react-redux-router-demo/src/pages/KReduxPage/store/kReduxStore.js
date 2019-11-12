import { createStore } from "../../../KRedux/kRedux";
import { counterReducer } from "./counterReducer";
const store = createStore(counterReducer)

export default store;