import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello-world';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello greetings="Hello"/>
      </header>
    </div>
  );
}

export default App;
