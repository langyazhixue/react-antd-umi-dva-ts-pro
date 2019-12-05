import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import PrivatePage from './components/PrivatePage';
class Layout extends Component {
  render() {
    return (
      <div>
        <div className="m-left">
          <NavLink to="/layout/home">⾸页</NavLink>
          <NavLink to="/layout/user">用户中心</NavLink>
          <NavLink to="/tet">notFound</NavLink>
        </div>
        <div className="m-right">
          <Redirect exact from="/layout" to="/layout/home" />
          <PrivatePage exact path="/layout/home" component={HomePage} />
          <PrivatePage exact path="/layout/user" component={UserPage} />
        </div>
      </div>
    );
  }
}

export default Layout;
