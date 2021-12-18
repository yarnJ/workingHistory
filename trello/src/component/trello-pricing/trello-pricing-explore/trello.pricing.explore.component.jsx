import React from "react";
import ExploreItemComponent from "../../../../src/component/trello-pricing/trello-pricing-explore/explore.item.component";
import { Col, Row, Container } from "react-bootstrap";
import "../../../../src/page/trello-pricing/trello.pricing.style.scss";

const TrelloPricingExploreComponent = ({trelloPricingData}) => {

  return(
    <div className="explore-area">
      <Container>
        <Row>
          {trelloPricingData.explore.map(({id, ...otherTrelloPricingExploreComponentProps}, index) => (
            <Col md={3}  key={ index }>
              <ExploreItemComponent { ...otherTrelloPricingExploreComponentProps }/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
};

export default TrelloPricingExploreComponent;