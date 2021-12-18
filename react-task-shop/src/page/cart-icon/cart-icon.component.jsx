import React from "react";
import '../cart-icon/cart-icon.style.css';
import {toggleCartHidden} from "../../redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemCounts } from "../../redux/cart/cart.selector";

const CartIcon = () => {

  const dispatch = useDispatch();
  const itemCounts = useSelector(state => selectCartItemCounts(state));

  return(
    <div className="cart-icon" onClick = {() => dispatch(toggleCartHidden())}>
      <p>CART</p><br/>
      <span className="item-count">{ itemCounts }</span>
    </div>
  )
}

export default CartIcon;