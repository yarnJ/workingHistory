import React from "react";
import '../feature.style.scss';

const FeatureDescriptionComponent = ({ introduce }) => {

  return(
    <div className="feature-item-area">
      <h5>{ introduce.title }</h5>

      <h2>{ introduce.summary }</h2>

      <p className="text-gray">{ introduce.description }</p>
    </div>
  )
};

export default FeatureDescriptionComponent;