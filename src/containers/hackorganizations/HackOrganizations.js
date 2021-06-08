import React, { Component } from "react";
import "./Organizations.css";
import { Fade } from "react-reveal";
import Hacklist from "../../components/hackorganizationlist/Hacklist";

import OrganizationsData from "../../shared/hacks/organizations.json";
import Button from "../../components/button/Button";
import { devpost } from "../../portfolio";
import Achievement from "../moreAchievements/Achievement";
class HackOrganizations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div id="organizations">
        <div className="organizations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="organizations-header" style={{ color: theme.text }}>
              Participated & Won 15+ Hacks 
            </h1>
          </Fade>
        </div>
        <Hacklist logos={OrganizationsData["data"]} />
                  <div>
                  <Achievement/>
                  </div>
        <div className="resume-btn-div">
                  <Button
                   text="More Info"
                   newTab={true}
                   href={devpost.link}
                   theme={theme}
                  />
                </div>
      </div>
      
    );
  }
}

export default HackOrganizations;
