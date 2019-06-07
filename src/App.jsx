// App.js veranderen naar App.jsx (ook in index.js!)

import React, { Component } from 'react';
import logo from './logo.svg';

//styling importeren
import './assets/style.css'

//components importeren
import TopSection from './components/top/index.jsx';
import BottomSection from './components/bottom/index.jsx';

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
