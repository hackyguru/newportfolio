import React, { Component } from "react";
import expcoding from '../../assests/images/expcoding.gif';
export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={expcoding}></img>
    );
  }
}
