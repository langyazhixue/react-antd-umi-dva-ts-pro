import React, { Component } from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';

// react-router 中奉行一切介是组件的思想
// 路由器器-Router、链 接-Link、路路由-Route、独占-Switch、重定向-Redirect都 以组件形式存在
// Route渲染优先级:children>component>render
import HomePage from './HomePage'
import UserPage from './UserPage'
class RouterPage extends Component {
  render() {
    return (
      <div>
        <h1>RouterPage</h1>
        <BrowserRouter>
          <nav>
            <Link to="/" exact>⾸页</Link>
            <Link to="/user" exact>⽤户中心</Link>
          </nav>

          <Route exact path="/" component={HomePage} />
          <Route path="/user" component={UserPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterPage;
