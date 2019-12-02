import React, { Component } from 'react';

class TestPage extends Component {
  render() {
    const { match, location } = this.props;
    console.log(match)
    console.log(location)
    return <div>Test</div>;
  }
}

export default TestPage;
