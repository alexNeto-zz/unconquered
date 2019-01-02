import React, { Component } from "react";

class InfoItem extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <article>
            <h2>{this.props.title}</h2>
          </article>
        </a>
      </React.Fragment>
    );
  }
}

export default InfoItem;
