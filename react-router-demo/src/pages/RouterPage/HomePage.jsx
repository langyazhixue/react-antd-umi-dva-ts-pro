import React, { Component } from 'react';
class HomePage extends Component {
  render() {
    console.log(this.props)
    // 会自动加上 history,location, match 三个对象
    return (
      <div>
        HomePage
      </div>
    );
  }
}
export default HomePage;
