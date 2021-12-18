import React from "react";
import "../../../../page/what-we-do/customer/customer.style.scss";

const CustomerDescriptionComponent = (props) => {
  return(
    <div className="customer-description">
      <h3>{ props.title }.</h3>

      <p>{ props.description }</p>
    </div>
  )
};

export default CustomerDescriptionComponent;