import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ReduxPage from './pages/ReduxPage/ReduxPage';
import ReactReduxStore from './pages/ReduxPage/ReactReduxStore.jsx'
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
      <h2>react-redux redux</h2>
        <ReactReduxStore/>
      </div>

    </div>
  );
}

export default App;
