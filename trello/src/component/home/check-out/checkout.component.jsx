import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CHECKOUT_DATA from "./checkOut.data";
import CheckoutItemComponent from "./checkout.item.component";
import { useState, useEffect } from "react";
import "../../home/check-out/checkout.style.scss";

const CheckoutComponent = () => {

  const [checkoutData, setcheckoutData] = useState([]);

  useEffect(() => {
    setcheckoutData(CHECKOUT_DATA);
  }, [])

  return(
    <div className="checkout-side">
      <Container>
        <Row>
          {checkoutData.map(({id, ...otherCheckoutComponentProps}, index) => (
            <Col sm={9} md={6} key={index} >
              <CheckoutItemComponent {...otherCheckoutComponentProps }/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default CheckoutComponent;
