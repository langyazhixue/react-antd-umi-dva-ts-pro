import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ReduxPage from './pages/ReduxPage/ReduxPage';
// import ReactReduxStore from './page
import KReactPage from './pages//KReduxPage/KReduxPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {/* <ReduxPage/> */}
      </div>
      <div>
      {/* <h2>react-redux redux</h2> */}
        {/* <ReactReduxStore/> */}
      </div>

      <div>
        <h2>KRdux 测试页面</h2>
        <KReactPage/>
      </div>
    </div>
  )
}

export default App;
