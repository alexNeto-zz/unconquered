import React, { Component } from "react";

class InfoPanel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>{this.props.currentTime}</p>
      </React.Fragment>
    );
  }
}

export default InfoPanel;
