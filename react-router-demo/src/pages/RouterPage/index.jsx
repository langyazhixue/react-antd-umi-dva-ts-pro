import React, { Component } from 'react';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// react-router 中奉行一切介是组件的思想
// 路由器器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect都 以组件形式存在
// Route渲染优先级:children>component>render
import HomePage from './HomePage';
import UserPage from './UserPage';
import SearchPage from './SearchPage';
import PrivateRoute from './PrivateRoute';
import LoginOut from './LoginOut';
import LoginPage from './LoginPage';
class RouterPage extends Component {
  render() {
    const searchID = '1234';
    return (
      <div>
        <h1>RouterPage</h1>
        <BrowserRouter createElement={createElement}>
          <nav>
            <Link to="/">⾸页</Link>
            <Link to="/user">⽤户中心</Link>
            <Link to={'/search/' + searchID}>搜索中心</Link>
            <Link to='/ddd'>404</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/user" component={LoginOut} />
            <Route path="/search/:id" component={SearchPage} />
            <Route path="/login" component={LoginPage} />
            <Route  component={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
function createElement(Component, props) {
  console.log('走');
  return <Component {...props} />;
}
export default RouterPage;
