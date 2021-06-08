import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import HackOrganizations from "../../containers/hackorganizations/HackOrganizations";

import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

class Hackathons extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <HackOrganizations theme={this.props.theme} />

        
       
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Hackathons;
