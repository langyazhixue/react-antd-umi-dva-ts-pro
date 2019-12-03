import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// 路由守卫
// 思路： 创建高阶组件包装Route使其具有权限判断功能
class PrivateRoute extends Component {
  render() {
    console.log('rerender privation')
    const { path, component, isLogin } = this.props
    if(isLogin) {
      return (
        <div><Route path={path} component = {component}/></div>
      )
    } else {
      return (
        <Redirect
        exact
        from='/calendar/search/:id'
        to={{
          pathname:'/login',
          state: { redirect: path }
        }}
        />
      )
    }
  }
}
const mapStateToProps = (state) => {
  return state.user
}
export default connect(mapStateToProps)(PrivateRoute);
