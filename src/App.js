import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './main/main';


const MainMenu = () => {
return (
<div>
  <Link to="/">
    <button>home</button>
  </Link>
  <Link to="/about">
    <button>About</button>
  </Link>
  <Link to="/code">
    <button>code</button>
  </Link>
  <Link to="/contact">
    <button>contact</button>
  </Link>
  <Link to="/info">
    <button>info</button>
  </Link>
</div>
);
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
         <Main />
        </div>
      </Router>
    );
  }
}

export default App;