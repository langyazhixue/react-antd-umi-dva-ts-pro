import React, { Component } from "react";
import store from "./store/kReduxStore";
export default class ReduxPage extends Component {
  componentDidMount() {
    // 添加订阅
    store.subscribe(() => {
      // 增加一个监听
      this.forceUpdate()
      // this.setState({});
    })
  }
  render() {
    // console.log("store", store);
    return (
      <div>
        <h1>KReduxPage</h1>
        <h2>KRedux</h2>
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({ type: "add" })}>add</button>
        <button onClick={() => store.dispatch({ type: "minus" })}>minus</button>
      </div>
    );
  }
}