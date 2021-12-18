import React from "react";
import AboutMineirosItemComponent from "./about.mineiros.item.component";
import ImageComponent from '../../reusebal/image.component';
import { Col, Row, Container } from "react-bootstrap";
import '../../about-us/about.style.scss';

const AboutMineirosComponent = (props) => {

  const aboutMineirosImageStyle = {
    width: "100%"
  }

  return(
    <div className="about-mineiros-area">
      <Container>
        <Row>
          <Col xs={9} md={6}>
            <AboutMineirosItemComponent/>
          </Col>

          <Col xs={9} md={6}>
            <ImageComponent src={ props.aboutMieirosLogo } style = { aboutMineirosImageStyle }/>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default AboutMineirosComponent;