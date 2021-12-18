import React from "react";
import FeatureItemComponent from "./feature-item.component";
import FEATURE_DATA from "./feature.data";
import { useState, useEffect } from "react";
import '../features/feature.style.scss';

const FeatureComponent = () => {

  const [featureData, setFeatureData] = useState([]);

  useEffect(() => {
    setFeatureData(FEATURE_DATA);
  }, []);

  return(
    <div className="feature-side">
      {featureData.map( ({ ...otherFeatureComponentProps }, index)  => (
        <FeatureItemComponent key = { index } { ...otherFeatureComponentProps }/>
      ))}
    </div>
  )
};

export default FeatureComponent;