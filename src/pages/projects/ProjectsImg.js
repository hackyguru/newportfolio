import React, { Component } from "react";
import Coding from '../../assests/images/coding-logo.gif';
export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img  src={Coding}></img>
    );
  }
}