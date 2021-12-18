import React from "react";
import AboutPartnersItemComponent from "./about.partners.item.component";
import { Container } from "react-bootstrap";
import '../../../about-us/about.style.scss';

const AboutPartnersIntroComponent = ({aboutPartnersData}) => {
  return(
    <div className="about-partners-intro-area">
      <Container>
        {aboutPartnersData.map(aboutPartnersData => (
          <AboutPartnersItemComponent key={aboutPartnersData.id} aboutPartnersData = { aboutPartnersData }/>                                                            
        ))}
      </Container>
    </div>
  )
};

export default AboutPartnersIntroComponent;