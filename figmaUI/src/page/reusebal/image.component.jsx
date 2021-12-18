import React from "react";
import { Image } from "react-bootstrap";

const ImageComponent = (props) => {
  return(
    <Image src={props.src} style={props.style}></Image>
  )
};

export default ImageComponent;