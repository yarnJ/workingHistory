import React from "react";
import TrelloPricingExploreComponent from "../../../src/component/trello-pricing/trello-pricing-explore/trello.pricing.explore.component";
import TrelloPricingIntroComponent from "../../../src/component/trello-pricing/trello-pricing-intro/trello.pricing.intro.component";
import TRELLO_PRICING_DATA from "../../../src/page/trello-pricing/trello.pricing.data";
import TrelloPricingCompareComponent from "../../component/trello-pricing/trello-pricing-compare/trello.pricing.compare.component";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../../src/page/trello-pricing/trello.pricing.style.scss";

const TrelloPricingComponent = () => {

  const [trelloPricingData, settrelloPricingData] = useState(TRELLO_PRICING_DATA);
  const trelloLocation = useLocation();
  console.log(trelloLocation.pathname, 'trello');

  return(
    <div className="trello-pricing-side">
      <div className="trello-pricing-intro-side">
        <TrelloPricingIntroComponent trelloPricingData = { trelloPricingData }/>
      </div>

      <div className="trello-pricing-explore-side">
        <TrelloPricingExploreComponent trelloPricingData = { trelloPricingData }/>
      </div>

      <div className="trello-pricing-compare-side">
        <TrelloPricingCompareComponent trelloPricingData = { trelloPricingData }/>
      </div>
    </div>
  )
};

export default TrelloPricingComponent;