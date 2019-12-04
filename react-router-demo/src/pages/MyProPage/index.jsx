import React, { Component } from 'react';
import { BrowserRouter,  Switch, Route,Redirect } from 'react-router-dom';
import Layout from './Layout'
import NotFound from './components/NotFound'
// import HomePage from './components/HomePage';
// import UserPage from './components/UserPage';
import LoginPage from './components/LoginPage';
// import PrivateRoute from './components/PrivatePage'
class MRoutePage extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/layout' />
        <Route path='/layout' component={Layout}></Route>
        {/* <PrivatePage component={Layout}>
          <Route path="/home" component={HomePage} />
          <Route path="/user" component={UserPage} />
        </PrivatePage> */}
         <Route path='/login' component={LoginPage}/>
         <Route path='*' component={NotFound} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default MRoutePage