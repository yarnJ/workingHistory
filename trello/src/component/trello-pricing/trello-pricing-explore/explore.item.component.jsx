import React from "react";
import ExploreItemPaymentComponent from "../../../component/trello-pricing/trello-pricing-explore/explore-item/explore.item.payment.component"
import ExploreItemCustomComponent from "../../../component/trello-pricing/trello-pricing-explore/explore-item/explore.item.custom.component";
import "../../../../src/page/trello-pricing/trello.pricing.style.scss";

const ExploreItemComponent = ({ payment, custom }) => {

  return(
    <div className="explore-item-area">
      <div className="explore-item-payment-side">
        {payment.map(({id, ...otherExploreItemComponentProps}, index) => (
          <ExploreItemPaymentComponent key={index} { ...otherExploreItemComponentProps }/>
        ))}
      </div>

      <div className="explore-item-custom-side">
        {custom.map(({id, ...otherExploreItemComponentProps}, index) => (
          <ExploreItemCustomComponent key={index} { ...otherExploreItemComponentProps }/>
        ))}
      </div>
    </div>
  )
};

export default ExploreItemComponent;