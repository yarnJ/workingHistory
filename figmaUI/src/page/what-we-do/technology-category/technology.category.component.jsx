import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechnologyCategoryItemComponent from "./technology.category.item.component";
import TECHNOLOGY_CATEGORY_DATA from "./technology.category.data";
import { useState, useEffect } from "react";
import "../../../page/what-we-do/technology-category/technology.category.style.scss";

const TechnologyCategoryComponent = () => {

  const [technologyCategoryData, setTechnologyCategoryData] = useState([]);

  useEffect(() => {
    setTechnologyCategoryData(TECHNOLOGY_CATEGORY_DATA);
  }, [])

  return(
    <div className="technology-category-side">
      <Container>
        <Row>
        <Col xs={9} md={6}>
          <h1>Technologies we <br/><span>love!</span></h1>
        </Col>

        <Col xs={9} md={6}>
          <Row>
            {technologyCategoryData.map(({id, ...otherTechnologyCategoryComopnent}, index) => (
              <TechnologyCategoryItemComponent key={index} { ...otherTechnologyCategoryComopnent }/>
            ))}
          </Row>
        </Col>
        </Row>
      </Container>
    </div>
  )
};

export default TechnologyCategoryComponent;