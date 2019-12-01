import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class LoginPage extends Component {
  render() {
    console.log(this.props)
    const { isLogin, login, location } = this.props

    const { redirect = '/'} = location.state || {}
    console.log(this.props)
    if(isLogin) {
      return (
        <Redirect to={redirect}/>
      )
    } else {
      return (
        <div>
          <h3>LoginPage</h3>
          <button onClick={login}>login</button>
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return state.user
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch({
        type:'loginSuccess'
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
