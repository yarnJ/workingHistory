import React from "react";
import SolutionCodeItemComponent from "./solution.code.item.component";
import { Col, Row, Image } from "react-bootstrap";
import solutionImage from "../../../../assets/homepage/what-we-do/solution/solution.svg";
import "../../../../page/what-we-do/solution/solution.style.scss";

const SolutionCodeDescriptionComponent = ({solutionCodeData}) => {

  return(
    <div className="solution-code-description-area">
      <Row>
        <Col xs={9} md={6}>
          <SolutionCodeItemComponent solutionCodeData={ solutionCodeData }/>
        </Col>

        <Col xs={9} md={6}>
          <Image src={ solutionImage }/>
        </Col>
      </Row>
    </div>
  )
};

export default SolutionCodeDescriptionComponent;