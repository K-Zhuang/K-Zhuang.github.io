import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <span>
            <a className="App-link" href="game1.html" target="">你画我猜</a>
          </span>
          {'  '}
          <span>
            <a className="App-link" href="game2.html" target="">升级</a>
            </span>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          :D
        </a> */}
      </header>
    </div>
  );
}

export default App;
