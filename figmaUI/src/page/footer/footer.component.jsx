import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import CopyrightComponent from "./copyRight.component";
import FooterCategoryComponent from "./footer.category.component";

import '../footer/footer.style.scss';

const FooterComponent = () => {
  return(
    <div className="footer-side">
      <Card.Footer className="text-muted">
        <Container>
          <Row>
            <Col xs={5} md={4}>
              <CopyrightComponent/>
            </Col>

            <Col xs={13} md={8}>
              <FooterCategoryComponent/>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </div>
  )
};

export default FooterComponent;