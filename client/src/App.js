import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Navbar from './components/navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
    </div>
    );
  }
}

export default App;
