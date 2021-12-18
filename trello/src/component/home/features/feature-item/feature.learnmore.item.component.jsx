import React from "react";
import { useState, useEffect } from "react";

const FeatureLearnMoreItemComponent = ({ learnMore }) => {

  const [ learnmoreItem, setLearnmoreItem] = useState([]);

  useEffect(() => {
    setLearnmoreItem(learnMore.item);
  }, []);

  console.log(learnmoreItem);

  return(
    <div className="">
      <ul>
        {/* {learnMore.item.map(({learnMore}, index) => ( */}
          <li>{ learnmoreItem }</li>
        {/* ))} */}
        {/* <li>{ learnMore }</li> */}
      </ul>
    </div>
  )
};

export default FeatureLearnMoreItemComponent;