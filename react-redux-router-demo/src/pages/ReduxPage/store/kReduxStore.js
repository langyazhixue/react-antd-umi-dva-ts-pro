import { createStore } from "redux";

import { counterReducer } from "./counterReducer";
import  reduxDevtoolsExtension ,{ composeWithDevTools }from 'redux-devtools-extension'
console.log(reduxDevtoolsExtension)


const store = createStore(counterReducer,composeWithDevTools());

export default store;