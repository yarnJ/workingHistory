import React from "react";
import "../customer-stories/customer.style.scss";
import CustomerAdComponent from "./customer-ad/customer-ad.component";
import CustomerDescriptionComponent from "./customer-description/customer-description.component";
import CarouselButtonComponent from "./carousel-button/carousel-button.component";
import CUSTOMER_DATA from "./customer.data";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CustomerComponent = () => {

  const [ customerData, setCustomerData ] = useState([]);
  const num = useSelector(e => e.custom.num);

  useEffect(() => {
    setCustomerData(CUSTOMER_DATA);
  }, []);

  return(
    <div className="customer-side">
      <div className="carousel-side">
        {customerData.map(({ id, ...otherCustomerComponentProps }, index) => (
          <div  className="carousel-item" key={index} style={ id===num? {display: "flex"} : {display: "none"} } id={ index }>
            <div className = "customerad-area">
              <CustomerAdComponent { ...otherCustomerComponentProps }/>
            </div>
            
            <div className="customerDes-area">
              <CustomerDescriptionComponent { ...otherCustomerComponentProps }/>
            </div>
          </div>
        ))}   
      </div>
        
      <div className="carousel-button-side">
        <CarouselButtonComponent/>
      </div>  
    </div>
  )
};

export default CustomerComponent;