/*
    App.js veranderen naar App.jsx (ook in index.js!)

*/

import React, { Component } from 'react';
import logo from './logo.svg';

import './src/style.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="main-container">Main Container</div>
      </div>
    )
  }
}

export default App;
