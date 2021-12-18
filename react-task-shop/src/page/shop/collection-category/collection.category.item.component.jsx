import React from "react";
import "../shop.style.css";

const CollectionCategoryItemComponent = ({item}) => {

  return(
    <div className="collection-category-item-area">
      {item.map((item, index) => (
        <div className="collection-category-item" key={index}>
          <h3>{ item.name }</h3>
          <h5>{ item.price }</h5>
        </div>
      ))}
    </div>
  )
};

export default CollectionCategoryItemComponent;