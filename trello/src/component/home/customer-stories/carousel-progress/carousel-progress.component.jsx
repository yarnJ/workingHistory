import React from "react";
import '../../customer-stories/customer.style.scss';

const CarouselProgressComponent = (props) => {

  return(
    <div className="carouselProgress-area">
      <li className="dot"  style={ props.style }></li>
    </div>
  )
};

export default CarouselProgressComponent;