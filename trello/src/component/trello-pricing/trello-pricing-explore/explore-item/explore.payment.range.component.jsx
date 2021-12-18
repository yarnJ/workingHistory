import React from 'react'
import FormInput from '../../../../../src/resuable/formInput/form-input.component';
import { useState } from 'react';
import "../../../../../src/page/trello-pricing/trello.pricing.style.scss";

const ExplorePaymentRangeComponent = ({ rangestyle }) => {
  const [rangeVal, setrangeVal] = useState(25)

  const handleChange = (e) => {
    setrangeVal(e.target.value);
  }
  return(
    <div className='explore-payment-range-area'>
      <p>Est. cost for <span>{ rangeVal }</span> users</p>
      <FormInput type={rangestyle.type} min={ rangestyle.min } max={ rangestyle.max } onChange={handleChange} value={ rangeVal }/>
    </div>
  )
};

export default ExplorePaymentRangeComponent;