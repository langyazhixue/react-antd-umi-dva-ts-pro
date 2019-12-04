import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
class Topics extends Component {
  render() {
    console.group('withRouter')
    console.log(this.props)
    // match,location, history, store 中的数据都在props中传递下来了
    return (
      <p>在withRouter中用redux</p>
    )
  }
}

const mapStateToPrpos = (state) => {
  return state.user
}
const TopicsWapper = withRouter(connect(mapStateToPrpos)(Topics))

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
        <TopicsWapper/>
        <SearchChild />
      </div>
    );
  }
}

export default TestPage;
