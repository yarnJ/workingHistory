import React from "react";
import EnvironmentSummaryComponent from "./emvironment-summary/environment.summary.component";
import EnvironmentItemComponent from "./emvironment-item/environment.item.component";
import ENVIRONMENT_ITEM_DATA from "./environment.item.data";
import { useState, useEffect } from "react";
import "../../../page/what-we-do/environment/environment.style.scss";

const EnvironmentComponent = () => {

  const [environmentData, setEnvironmentData] = useState([]);

  useEffect(() => {
    setEnvironmentData(ENVIRONMENT_ITEM_DATA);
  }, []);

  return(
    <div className="environment-side">
      <div className="environment-summary-side">
        <EnvironmentSummaryComponent/>
      </div>

      <div className="environment-item-side">
        <EnvironmentItemComponent environmentData = { environmentData }/>
      </div>
    </div>
  )
};

export default EnvironmentComponent;