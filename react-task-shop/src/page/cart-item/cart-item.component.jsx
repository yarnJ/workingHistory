import React from "react";
// import '../cart-item/cart-item.style.scss';

const CartItem = ({ item }) => {

  return(
    <div className="cart">
      <div className="item-details">
        <span className="name">{ item.name }</span>
        <span className="price">$ { item.price } x { item.quantity } </span>
      </div>
    </div>
  )
};

export default CartItem