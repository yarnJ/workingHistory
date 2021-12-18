import React from "react";
import "../../../../../src/page/trello-pricing/trello.pricing.style.scss";

const ExploreItemCustomComponent = ({ title, content }) => {
  return (
    <div className="explore-item-custom-area">
      <h5>{title}</h5>

      <div className="explore-custom-content-area">
        {content.map((content, index) => (
          <h6 key={index}>{content}</h6>
        ))}
      </div>
    </div>
  );
};

export default ExploreItemCustomComponent;
