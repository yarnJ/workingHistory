import React from "react";
import ButtonComponent from "../../../resuable/button/button.component";
import ImageFeature from "../../../resuable/imageFeature/imageFeature.component";
import { Row, Col } from "react-bootstrap";
import "../../home/check-out/checkout.style.scss";

const CheckoutItemComponent = ({id, imgUrl, title, description, buttonLabel, path}) => {
  return(
    <div className="checkout-item-area" key={id}>
      <Row>
        <Col xs={5} md={3}>
          <ImageFeature src={ imgUrl.default }/>
        </Col>

        <Col xs={13} md={9}>
          <h3>{ title }</h3>
          <p>{ description }</p>
          <ButtonComponent label={ buttonLabel } path={ path }/>
        </Col>
      </Row>
    </div>
  )
};

export default CheckoutItemComponent;