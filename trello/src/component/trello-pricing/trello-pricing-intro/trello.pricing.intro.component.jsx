import React from "react";
import { Container } from "react-bootstrap";
import "../../../../src/page/trello-pricing/trello.pricing.style.scss";

const TrelloPricingIntroComponent = ({ trelloPricingData }) => {
  return(
    <div className="trello-pricing-intro-area">
      <Container>
        {trelloPricingData.intro.map(intro => (
          <div key="1">
            <h3>{ intro.title }</h3>

            <h6>{ intro.description }</h6>
          </div>
        ))}
      </Container>
    </div>
  )
};

export default TrelloPricingIntroComponent;