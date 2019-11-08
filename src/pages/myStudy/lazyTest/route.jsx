 // 基于路由的代码分割
 // 决定在哪里引入代码分割需要一些技巧。你需要确保选择的位置能够均匀地分割代码包而不会影响用户体验。
 // 一个不错的选择是从路由开始。大多数网络用户习惯于页面之间能有个加载切换过程。你也可以选择重新渲染整个页面，这样您的用户就不必在渲染的同时再和页面上的其他元素进行交互import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import React, { Suspense, lazy } from 'react';
// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//       </Switch>
//     </Suspense>
//   </Router>
// );