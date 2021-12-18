import React from "react";
import { useSelector } from "react-redux";
import CollectionCategoryItemComponent from "./collection.category.item.component";

import "../shop.style.css";

const CollectionCategoryComponent = () => {

  const collection = useSelector(e => e.shop.collection)

  return(
    <div className="collection-category-side">
      {collection.map((collection, index) => (
        <div className="collection-category-item-side" key = {index}>
          <p>{ collection.title }</p>
          <CollectionCategoryItemComponent item={ collection.items }/>
        </div>
      ))}
    </div>
  )
};

export default CollectionCategoryComponent;