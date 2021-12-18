import React from "react";
import '../hero-description/hero-description.style.scss';

const HeroDescription = ({ value }) => {
  return(
    <div className="hero-description">
      <h2>{ value.head_description }</h2>

      <h6>{ value.body_description }</h6>
    </div>
  )
};

export default HeroDescription;