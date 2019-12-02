import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// 嵌套
// Route 组件 嵌套在其他页面组件中就产生了嵌套关系
function Detail() {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  )
}
class SearchPage extends Component {
  render() {
    const { match,history } = this.props;
    console.log(match)
    console.log(history)
    const { id } = match.params;
    return (
      <div>
        <h1>Search:{id}</h1>
        <nav>
          <Link to={'/search/'+ id + '/add' }>新增</Link>
          <Link to={'/search/'+ id + '/detail'}>详情</Link>
        </nav>
        <Route path={'/search/'+ id + '/add' } component={() => <h1>add</h1>} />
        <Route path={'/search/'+ id + '/detail'} component={Detail} />
      </div>
    )
  }
}
export default SearchPage;
