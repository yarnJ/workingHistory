import React from "react";
import AboutPartnersSocialComponent from "./about-partners-social/about.partners.social.component";
import '../../../about-us/about.style.scss';

const AboutPartnersDetailComponent = ({aboutPartnersData}) => {
  return(
    <div className="about-partners-detail-area">
      <h4>{ aboutPartnersData.name }</h4>

      <p>{ aboutPartnersData.position }</p>

      <strong>{ aboutPartnersData.introduce }</strong>

      <div className="about-partners-social-side">
        <AboutPartnersSocialComponent aboutPartnersData={ aboutPartnersData }/>
      </div>
    </div>
  )
};

export default AboutPartnersDetailComponent;