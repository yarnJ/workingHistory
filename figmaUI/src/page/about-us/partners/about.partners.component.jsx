import React from "react";
import AboutPartnersSummaryComponent from "./about-partners-summary/about.partners.summary.component";
import AboutPartnersIntroComponent from "./about-partners-intro/about.partners.intro.component";
import ABOUT_PARTNERS_DATA from "./about.partners.data";
import { useState, useEffect } from "react";
import '../../about-us/about.style.scss';

const AboutPartnersComponent = () => {

  const [aboutPartnersData, setaboutPartnersData] = useState([]);
  useEffect(() => {
    setaboutPartnersData(ABOUT_PARTNERS_DATA);
  }, []);

  return(
    <div className="about-partners-area">
      <div className="about-partners-summary-side">
        <AboutPartnersSummaryComponent/>
      </div>

      <div className="about-partners-intro-side">
        <AboutPartnersIntroComponent aboutPartnersData={ aboutPartnersData }/>
      </div>
    </div>
  )
};

export default AboutPartnersComponent;