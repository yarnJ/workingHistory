import React from "react";
import '../check-out-item/check-out-item.style.scss';
import {increaseItemToCart, decreaseItemToCart, removeItemToCart} from '../../../src/redux/cart/cart.action';
import { useDispatch } from "react-redux";
// import { selectCartItems } from "../../redux/cart/cart.selector";
// import { useSelector } from "react-redux";

const CheckOutItem = ({ item }) => {

  const dispatch = useDispatch();

  // const cartItems = useSelector(state => selectCartItems(state));

  return(
    <div className="checkout-item">
      <div className="imgUrl">{ item.imgUrl }</div>
      <div className="name">{ item.name }</div>
      <div className="price">{ item.price }</div>
      <div className="quantity">
        <div className="" onClick={() => dispatch(decreaseItemToCart(item))}>-</div>
          { item.quantity }
        <div className="" onClick={() => dispatch(increaseItemToCart(item))}>+</div>
      </div>
      <div className="remove-button" onClick={() => dispatch(removeItemToCart(item))}>remove</div>
    </div>
  )

};

export default CheckOutItem;