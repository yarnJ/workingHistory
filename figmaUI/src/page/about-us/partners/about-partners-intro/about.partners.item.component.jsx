import React from "react";
import { Row, Col } from "react-bootstrap";
import AboutPartnersAvatarComponent from "./about.partners.avatar.component";
import AboutPartnersDetailComponent from "./about.partners.detail.component";
import '../../../about-us/about.style.scss';

const AboutPartnersItemComponent = ({aboutPartnersData}) => {

  // Array partnersDetail = [name, position, description];

  return(
    <div className="about-partners-item-area">
      <Row>
        <Col xs={6} md={4}>
          <AboutPartnersAvatarComponent imgUrl = { aboutPartnersData.imgUrl }/>
        </Col>

        <Col xs={12} md={8}>
          <AboutPartnersDetailComponent aboutPartnersData = { aboutPartnersData }/>
        </Col>
      </Row>
    </div>
  )
};

export default AboutPartnersItemComponent;