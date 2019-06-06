import React from "react";

export default class Store extends React.Component {
  constructor (props) {
    super(props);
    // main app state
    this.state {
      appName: 'Weather app'
    }
  }

  render () {
    return React.Children.map(this.props.children, (child) => {
      // returns alles van state
      return React.cloneElement(child, { ...this.state});
    };
  }
}
