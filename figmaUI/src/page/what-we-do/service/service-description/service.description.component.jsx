import React from "react";
import { Image } from "react-bootstrap";
import ServiceButtonComponent from "../service-description/service.button.component";
import serviceImage2 from "../../../../assets/homepage/what-we-do/service/image2.svg";
import '../../../what-we-do/service/service.style.scss';

const ServiceDescriptionComponent = () => {
  return(
    <div className="service-area">
      <h1>DevOps as a Service for modern businesses</h1>

      <h5>We help our clients build businesses by designing, building and implementing production-grade, secure and scalable infrastructure that delight developers and satisfy your current and future business needs.</h5>

      <div className="button-area">
        <ServiceButtonComponent/>
      </div>

      <Image className="service-image2" src={ serviceImage2 }/>
      
    </div>
  )
};

export default ServiceDescriptionComponent;