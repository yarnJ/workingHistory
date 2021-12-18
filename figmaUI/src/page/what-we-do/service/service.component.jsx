import React from "react";
import { Col, Row } from "react-bootstrap";
import ServiceDescriptionComponent from "./service-description/service.description.component";
import ServiceImageComponent from "./service-image/service.image.component";

const ServiceComponent = () => {

  return(
    <div className="service-side">
      <Row>
        <Col xs={9} md={6}>
          <ServiceDescriptionComponent/>
        </Col>

        <Col xs={9} md={6}>
          <ServiceImageComponent/>
        </Col>
      </Row>
    </div>
  )
};

export default ServiceComponent;