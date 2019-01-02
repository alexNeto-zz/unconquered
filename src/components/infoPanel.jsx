import React, { Component } from "react";
import InfoItem from "./infoItem";

class InfoPanel extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.items.map((item, key) => (
          <InfoItem href={item.href} title={item.title} key={key} />
        ))}
      </React.Fragment>
    );
  }
}

export default InfoPanel;
