import React from 'react'
import ButtonComponent from '../../../../resuable/button/button.component';
import { nextCarousel, prevCarousel } from '../../../../redux/customer/customer.action';
import CarouselProgressComponent from '../carousel-progress/carousel-progress.component';
import CUSTOMER_DATA from '../customer.data';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const CarouselButtonComponent = () => {

  const num = useSelector(e => e.custom.num);
  const [ customerData, setCustomerData ] = useState([]);
  useEffect(() => {
    setCustomerData(CUSTOMER_DATA);
  }, []);

  return(
    <div className="carousel-button-area">
      <ButtonComponent onClick={ prevCarousel } label="prev" style={{ backgroundColor: "#172b4d", color: "#fff", fontSize: "0.8rem", padding: "0.5rem", border: "1px solid" }}/>

      <div className="carousel-progress-side">
        {customerData.map(({ id, ...otherCarouselButtonComponent }, index) => (
          <CarouselProgressComponent key = { index } style={ id===num? { color: "#091e42"} : null }/>
        ))}
      </div>

      <ButtonComponent onClick={ nextCarousel } label="next" style={{ backgroundColor: "#172b4d", color: "#fff", fontSize: "0.8rem", padding: "0.5rem", border: "1px solid" }}/>
    </div>
  )
};

export default CarouselButtonComponent;
