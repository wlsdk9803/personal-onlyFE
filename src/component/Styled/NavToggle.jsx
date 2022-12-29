import React, { Component } from "react";
import "./NavToggle.css";
class NavToggle extends Component {
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </>
    );
  }
}

export default NavToggle;
