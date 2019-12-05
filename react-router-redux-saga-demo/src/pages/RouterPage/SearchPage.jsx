import React, { Component } from 'react';
import { Link, Route, useParams, useRouteMatch, Switch } from 'react-router-dom';
// 嵌套
// Route 组件 嵌套在其他页面组件中就产生了嵌套关系
function GetParams() {
  const { id } = useParams();
  return <div>id: {id}</div>;
}

function Detail() {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}
class SearchPage extends Component {
  render() {
    const { match, history } = this.props;
    console.log(match);
    console.log(history)
    // const { id } = match.params;
    return (
      <div>
        {/* <h1>Search:{id}</h1> */}
        <div>
          <GetParams />
        </div>
        <nav>
          <Link to={`${match.url}/add`}>新增</Link>
          <Link to={`${match.url}/detail`}>详情</Link>
        </nav>
        <TopicsRoute/>
      </div>
    );
  }
}

// useRouteMatch 测试

function TopicsRoute() {
  let match = useRouteMatch();
  console.group('match')
  console.log(match)
  return (
    <div>
      <Switch>
        <Route path={`${match}/add`} component={() => <h1>add</h1>} />
        <Route path={`${match}/detail`} component={Detail} />
      </Switch>
    </div>
  );
}

export default SearchPage;
