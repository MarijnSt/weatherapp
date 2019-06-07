import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Weather from './weather.jsx';

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //lege render return geeft een container terug
  render() {
    return <div className="top-container">
      <div className="title">Weather App</div>
      <Weather />
    </div>
  }
}
