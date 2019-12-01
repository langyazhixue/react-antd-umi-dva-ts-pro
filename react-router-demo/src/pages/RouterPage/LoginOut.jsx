import React, { Component } from 'react';
import { connect } from 'react-redux'
class LoginOut extends Component {
  render() {
    const { logout } = this.props
    return (
      <div>
        <h1>UserPage</h1>
        <button onClick={logout}>
        退出登录
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.user
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({
        type:'loginFailure'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOut);
