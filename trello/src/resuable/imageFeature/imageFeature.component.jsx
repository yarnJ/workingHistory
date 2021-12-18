import React from "react";
import '../imageFeature/imageFeature.style.scss';

const ImageFeature = (props) => {
  return(
    
    <div className="image-area" style={props.style}>
      {props.src ? <img className="hero-Img" src={ props.src } alt="fireSpot"/>
        : <div></div>
      }
    </div>
  )
};

export default ImageFeature;