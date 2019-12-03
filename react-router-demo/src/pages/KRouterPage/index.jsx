import React, { Component } from 'react';
import { KBrowserRouter, KRoute, KLink } from '../../KReactRouterDOM/k-react-router-dom';

class Home extends Component {
  render () {
    return (
      <div>
         <h1>Home</h1>
      </div>
    )
  }
}
class User extends Component {
  render () {
    return (
      <div>
         <h1>User</h1>
      </div>
    )
  }
}

class KRouterPage extends Component {
  render() {
    return (
      <div>
        <h1>KRouterPage</h1>
        <KBrowserRouter>
          <KLink to="/" >首页</KLink>
          <KLink to="/user" >User</KLink>
          <KRoute path = '/' exact commponent = {Home} />
          <KRoute path = '/user' commponent = {User} />
        </KBrowserRouter>
      </div>
    );
  }
}

export default KRouterPage;
