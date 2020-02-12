import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 clasName="App-title">Welcome to React!</h1>
          <Link to="/other">Other Page</Link>
        </header>
        <Fib />
      </div>
    </Router>
  );
}

export default App;
