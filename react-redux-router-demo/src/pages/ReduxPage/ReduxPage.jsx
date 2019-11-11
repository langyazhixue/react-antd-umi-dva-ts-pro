import React, { Component } from "react";
import store from "./store/reduxStore";
export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      // 增加一个监听
      this.forceUpdate();
      // this.setState({});
    });
  }
  render() {
    // console.log("store", store);
    return (
      <div>
        <h1>ReduxPage</h1>
        <h2>redux, react-redux 测试</h2>
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({ type: "add" })}>add</button>
        <button onClick={() => store.dispatch({ type: "minus" })}>minus</button>
      </div>
    );
  }
}