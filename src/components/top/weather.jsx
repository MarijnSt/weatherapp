import React from 'react';

import sunImage from '../../resources/images/sun.svg';

export default class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="weather-container">
        <div className="header">Location name</div>
        <div className="inner-container">
          <div className="image">
            <img src={sunImage} alt="sunny"/>
          </div>
          <div className="current-weather">10°</div>
        </div>
        <div className="footer">Sunny</div>
      </div>
    );
  };
}
