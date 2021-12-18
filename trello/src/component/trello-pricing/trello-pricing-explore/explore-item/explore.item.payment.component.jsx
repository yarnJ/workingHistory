import React from "react";
import ButtonComponent from "../../../../../src/resuable/button/button.component";
import ExplorePaymentRangeComponent from "../../../../../src/component/trello-pricing/trello-pricing-explore/explore-item/explore.payment.range.component";
import "../../../../../src/page/trello-pricing/trello.pricing.style.scss";

const ExploreItemPaymentComponent = ({title,
  price, 
  payment_method, 
  description, 
  range,
  button_label,
  path,
  style,
  rangestyle
  }) => {
  return(
    <div className="explore-item-payment-area">
      <div className="explore-payment-deacription-area">
        <h5>{ title }</h5>
        <h2>
          <span>$</span>
          { price }
          <span>USD</span>
        </h2>
        <h6>{ payment_method }</h6>
        <p>{ description }</p>
        {range === "true" ? <ExplorePaymentRangeComponent rangestyle={rangestyle}/>
        : null
        }
      </div>

      <div className="explore-payment-button-area">
        <ButtonComponent label={ button_label } path={ path } style={ style }/>
      </div>
    </div>
  )
};

export default ExploreItemPaymentComponent;