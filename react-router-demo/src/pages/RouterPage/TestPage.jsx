import React, { Component } from 'react';

class TestPage extends Component {
  go =() =>{
    const { history } = this.props
    history.push('/search/111',{
      state1:'11'
    })
  }
  render() {
    const { match, location } = this.props;
    console.log(match)
    console.log(location)
    return (
      <div>
        <div>Test</div>
        <button onClick={this.go}>去搜索页面</button>
      </div>
    )
  }
}

export default TestPage;
