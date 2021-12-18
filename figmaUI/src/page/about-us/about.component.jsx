import React from "react";
import AboutMineirosComponent from "./mineiros/about.mineiros.component";
import AboutMissionComponent from "./mission/about.mission.component";
import AboutPartnersComponent from "./partners/about.partners.component";
import aboutMieirosLogo from "../../assets/homepage/about/about-mineiros-logo.svg";
import ABOUT_MISSION_DATA from "./about.mission.data";
import { useState, useEffect } from "react";
import '../about-us/about.style.scss';

const AboutComponent = () => {

  const [aboutMissionData, setaboutMissionData] = useState([]);

  useEffect(() => {
    setaboutMissionData(ABOUT_MISSION_DATA);
  }, [])

  return(
    <div className="about-side">
      <div className="about-mineiros-side">
        <AboutMineirosComponent aboutMieirosLogo = { aboutMieirosLogo }/>
      </div>

      <div className="about-mission">
        <AboutMissionComponent aboutMissionData = { aboutMissionData }/>
      </div>

      <div className="about-partners">
        <AboutPartnersComponent/>
      </div>
    </div>
  )
};

export default AboutComponent;