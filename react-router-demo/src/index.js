
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'
//  Provider 包裹在 BrowserRouter 外面
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter 
      basename='/calendar' 
      getUserConfirmation={(message, callback) => {
      // this is the default behavior
      console.log(message)
      const allowTransition = window.confirm(message);
        callback(allowTransition);
      }}>
      <App />
    </BrowserRouter>
   
  </Provider>,document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
