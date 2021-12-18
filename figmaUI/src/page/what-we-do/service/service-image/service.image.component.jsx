import React from "react";
import { Image } from "react-bootstrap";
import serviceImage1 from "../../../../assets/homepage/what-we-do/service/image1.svg";
import serviceImage5 from "../../../../assets/homepage/what-we-do/service/image5.svg"
import serviceImage3 from "../../../../assets/homepage/what-we-do/service/image3.svg";
import "../../../../page/what-we-do/service/service.style.scss";

const ServiceImageComponent = () => {
  return(
    <div className="service-image-area">
      <Image className="service-image1" src={ serviceImage1 }/>

      <Image className="service-image5" src={ serviceImage5 }/>

      <Image className="service-image3" src={ serviceImage3 }/>
    </div>
  )
};

export default ServiceImageComponent;