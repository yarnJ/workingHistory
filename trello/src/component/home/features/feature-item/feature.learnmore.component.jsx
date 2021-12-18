import React from "react";
import FeatureLearnMoreItemComponent from "./feature.learnmore.item.component";

const FeatureLearnMoreComponent = ({ learnMore }) => {
  return(
    <div className="feature-item-area">
      <p>{ learnMore.description }</p>

        <FeatureLearnMoreItemComponent learnMore = { learnMore }/>
    </div>
  )
};

export default FeatureLearnMoreComponent;