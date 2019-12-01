import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// react-router 中奉行一切介是组件的思想
// 路由器器-Router、链 接-Link、路路由-Route、独占-Switch、重定向-Redirect都 以组件形式存在
// Route渲染优先级:children>component>render
// 404
import HomePage from './HomePage';
import UserPage from './UserPage';
import LoginOut from './LoginOut';
import SearchPage from './SearchPage';
import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';
class RouterPage extends Component {
  render() {
    const searchId = '1234';
    return (
      <div>
        <h1>RouterPage</h1>
        <BrowserRouter>
          <nav>
            <Link to="/" >
              ⾸页
            </Link>
            <Link to="/user" >
              ⽤户中心
            </Link>
            <Link to={'/search/' + searchId}>搜索</Link>
            <Link to="/aaa">不知道的页面</Link>
          </nav>
          {/* 设定一个没有path的路由在路由列表最后面，表示一定匹配 */}
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            {/* 用户中心必须先登录 */}
            {/* 实现一个退出登录 */}
            <PrivateRoute  path="/user" component={LoginOut} />
            <PrivateRoute path="/search/:id" component={SearchPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default RouterPage;
