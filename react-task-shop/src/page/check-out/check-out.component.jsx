import React from "react";
import { useState, useEffect } from "react";
import CheckOut_DATA from '../check-out/check-out.data';
import CheckOutItem from "../check-out-item/check-out-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { useSelector } from "react-redux";

import '../check-out/check-out.style.scss';

const CheckOut = () => {

  const [Variety, setVariety] = useState([]);
  const cartItems = useSelector(state => selectCartItems(state));

  useEffect(() => {
    setVariety(CheckOut_DATA);
  }, [])


  return (
    <div className="checkOut-page">
      <div className="checkOut-header">
        {Variety.map((Variety, index) => (
          <div key={ index } className="header-block">
            { Variety.concept === 'Price'
              ? Variety.concept + '($)'
              : Variety.concept 
            }
          </div>
        ))}
        
      </div>

      {cartItems.map(cartItem => 
        <CheckOutItem key={ cartItem.id } item={ cartItem }/>
      )}
    </div>
  )
  };

export default CheckOut