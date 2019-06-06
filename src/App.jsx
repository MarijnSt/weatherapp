/*
    App.js veranderen naar App.jsx (ook in index.js!)

*/

import React, { Component } from 'react';
import logo from './logo.svg';

import './assets/style.css'

//sections importeren
import TopSection from './components/top.jsx';
import BottomSection from './components/bottom.jsx';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top">
            <TopSection />
          </div>
          <div className="bottom">
            <BottomSection />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
