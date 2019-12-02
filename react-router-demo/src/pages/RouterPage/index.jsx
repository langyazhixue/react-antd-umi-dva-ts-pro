import React, { Component } from 'react';

import { BrowserRouter, NavLink , Route, Switch } from 'react-router-dom';
// react-router 中奉行一切介是组件的思想
// 路由器器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect都 以组件形式存在
// Route渲染优先级:children>component>render
import HomePage from './HomePage';
// import UserPage from './UserPage';
import SearchPage from './SearchPage';
import PrivateRoute from './PrivateRoute';
import LoginOut from './LoginOut';
import LoginPage from './LoginPage';
import TestPage from './TestPage';
import './index.css';
class RouterPage extends Component {
  //  判断是否激活链接的额外功能
  isActive =(match, location) => {
    // 需要返回一个　true 或者 flase
    console.log(match)
    console.log(location)
    if(location.pathname.indexOf('/search/') > -1) {
      return true
    } else {
      return false
    }
  }
  render() {
    const searchID = '1234';
    return (
      <div className = 'main'>
        <h1>RouterPage</h1>
        <BrowserRouter createElement={createElement}>
          <nav>
            <NavLink  exact to="/" activeClassName = 'linkActive' className='nav-link'>⾸页</NavLink>
            <NavLink exact to="/user" activeClassName = 'linkActive' className='nav-link'>⽤户中心</NavLink>
            <NavLink exact to={'/search/' + searchID} activeClassName = 'linkActive' className='nav-link' isActive = {this.isActive}>搜索中心</NavLink>
            <NavLink exact to="/test" activeClassName = 'linkActive' className='nav-link' >Link测试页面</NavLink>
            <NavLink exact to='/ddd' activeClassName = 'linkActive' className='nav-link'>404</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/user" component={LoginOut} />
            <Route path="/search/:id" component={SearchPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/test" component={TestPage} />
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
