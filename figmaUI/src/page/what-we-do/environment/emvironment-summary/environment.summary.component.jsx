import React from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as SummaryLogo } from "../../../../assets/homepage/what-we-do/environment/vector.svg";
import "../../../../page/what-we-do/environment/environment.style.scss";

const EnvironmentSummaryComponent = () => {
  return(
    <div className="environment-summary-area">
      <Container>
        <SummaryLogo/>

        <h4>WHY MINEIROS?</h4>

        <h1>A better way of managing <span>cloud environments</span></h1>

        <p>Save weeks of engineering time by choosing from pre-configured end-to-end architectures such as Kubernetes, ECS, Compute and Serverless.</p>
      </Container>
    </div>
  )
};

export default EnvironmentSummaryComponent;