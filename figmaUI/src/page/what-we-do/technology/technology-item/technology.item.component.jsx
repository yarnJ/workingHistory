import React from "react";
import { Image } from "react-bootstrap";

const TechonologyItemComponent = ({technologyData}) => {
  return(
    <Image src={technologyData.imgUrl.default}/>
  )
};

export default TechonologyItemComponent;