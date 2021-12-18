import React from "react";
import ShopItem from "../previewcollection.component";
import "../shop.style.css";

  const CollectionOverviewComponent = ({collections}) => {

  return(
    <div className="collection-overview-side">
      {collections.map(collections => (
        <ShopItem key = {collections.id} collections={ collections }/>
      ))}
    </div>
  )
};

export default CollectionOverviewComponent;