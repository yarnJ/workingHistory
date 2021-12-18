import React from "react";
import HeaderItemComponent from "./headerItem.component";
import HEADER_ITEM_DATA from "./header-item-data";
import { useState, useEffect } from "react";
import "../../page/header/header.style.scss";

const ResponseNavbarComponent = () => {

  const [headerItemData, setHeaderItemData] = useState([]);
  useEffect(() => {
    setHeaderItemData(HEADER_ITEM_DATA);
  }, []);

  return (
    <div className="response-header-item-side">
      {headerItemData.map((headerItemData) => (
        <HeaderItemComponent key={ headerItemData.id } headerItemData={ headerItemData }/>
      ))}
    </div>
  )
};

export default ResponseNavbarComponent;