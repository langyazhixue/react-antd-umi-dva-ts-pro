import React from 'react';
// dva/router 使用的是react-router
import { Router, Route, Switch } from 'dva/router';
import dynamic  from 'dva/dynamic'
// 路由配置文件



function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    models:() => [import('./routes/IndexPage/model.js')],
    component:() => import('./routes/IndexPage/index')
  })
  const ModelPage =  dynamic({
    app,
    models:() => [import('./routes/ModelPage/model.js')],
    component:() => import('./routes/ModelPage/index')
  })

  const dvaLoadingPage =  dynamic({
    app,
    models:() => [import('./routes/dvaLoadingPage/model.js')],
    component:() => import('./routes/dvaLoadingPage/index')
  })


  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/model' component = {ModelPage}/>
        <Route path='/loading' component = {dvaLoadingPage}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
