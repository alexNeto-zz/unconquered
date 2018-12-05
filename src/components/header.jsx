import React, { Component } from "react";
import coatOfArms from "../assets/images/coat-of-arms.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <img id="coat-of-arms" src={coatOfArms} alt="Polish coat of arms" srcset="" />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
