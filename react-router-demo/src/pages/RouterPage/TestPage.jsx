import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Search extends Component {
  go = () => {
    const { history } = this.props;
    history.push('/search/111', {
      state1: '11',
    });
  };
  render() {
    return <button onClick={this.go}>去搜索页面</button>;
  }
}
const SearchChild = withRouter(Search);
class TestPage extends Component {
  render() {
    const { match, location } = this.props;
    console.log(match);
    console.log(location);
    return (
      <div>
        <div>Test</div>
        <SearchChild />
      </div>
    );
  }
}

export default TestPage;
