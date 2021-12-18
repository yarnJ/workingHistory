import React from "react";
import ButtonComponent from "../../../reusebal/buttonComponent";
import SERVICE_BUTTON_DATA from "../service-description/service.button.data";
import { useState, useEffect } from "react";

const ServiceButtonComponent = () => {

  const [serviceButtonData, setServiceButtonData] = useState([]);

  useEffect(() => {
    setServiceButtonData(SERVICE_BUTTON_DATA);
  }, []);

  return(
    <div className="service-button-area">
      {serviceButtonData.map(serviceButtonData => (
        <ButtonComponent 
          key = {serviceButtonData.id} 
          label={ serviceButtonData.label } 
          src={ serviceButtonData.imgUrl.default }  
          path={serviceButtonData.path} 
          style={ serviceButtonData.style }/>
      ))}
    </div>
  )
};

export default ServiceButtonComponent;