import React from "react";
import { Container } from "react-bootstrap";
import SearchbarComponent from "./search-bar/searchbar.component";
import DescriptionComponent from "./description/description.component";
import "../../../page/trello-pricing/trello.pricing.style.scss";

const TrelloPricingCompareComponent = ({ trelloPricingData }) => {
  return(
    <div className="trello-pricing-compare-area">
      <Container>
        <h2>Compare our plans</h2>

        <div className="search-bar-side">
          {
            trelloPricingData.compare.map(({id, ...otherTrelloPricingCompareComponentProps}, index) => (
              <SearchbarComponent key={index} { ...otherTrelloPricingCompareComponentProps }/>
            ))
          }
        </div>

        <div className="description-side">
          {
            trelloPricingData.compare.map(({id, ...otherTrelloPricingCompareComponentProps}, index) => (
              <DescriptionComponent key={index} { ...otherTrelloPricingCompareComponentProps }/>
            ))
          }
        </div>
      </Container>
    </div>
  )
};

export default TrelloPricingCompareComponent;