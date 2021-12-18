import React from "react";
import '../../page/contact/contact.style.scss';
import ContactGladComponent from "./contect-part/contact.glad.component";
import ContactSubmitComponent from "./contect-part/contact.submit.component";
import { Container, Col, Row } from "react-bootstrap";

const ContactComponent = () => {
  return(
    <div className="contact-side">
      <Container>
        <Row>
          <Col xs={7} md={5}>
            <ContactGladComponent/>
          </Col>

          <Col xs={11} md={7}>
            <ContactSubmitComponent/>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default ContactComponent;