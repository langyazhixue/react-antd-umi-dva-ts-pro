import React from 'react';
// dva/router 使用的是react-router
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ModelPage from './routes/ModelPage';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/model' component = {ModelPage}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
