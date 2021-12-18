import React from "react";
import { Image, Col } from "react-bootstrap";
import "../../../page/what-we-do/technology-category/technology.category.style.scss";

const TechnologyCategoryItemComponent = ({ id, imgUrl }) => {
  return(
    // <div className="technology-category-item-area">
      <Col xs={2} key={id} className="technology-category-item-area">
        <Image src={ imgUrl.default }/>
      </Col>
    // </div>
  )
};

export default TechnologyCategoryItemComponent;