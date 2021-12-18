import React from "react";
import CartItem from "../cart-item/cart-item.component";
import '../cart-dropdown/cart-dropdown.style.css';
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { useNavigate } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { CartDropdownContainer, CartItemContainer } from "./cart-dropdown.component.styles";

const CartDropdown = () => {

  const cartItems = useSelector(state => selectCartItems(state));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToCheckoutPage = () => {
    dispatch(toggleCartHidden());
    navigate('/checkout');
  }

  return(
    <CartDropdownContainer>
      <CartItemContainer>
        { cartItems.length? (
            cartItems.map((cartItem, index) => 
              <CartItem key = { index } item = { cartItem }/>
            )
          ) : (<span>Your Cart is empty</span>) 
        }
      </CartItemContainer>
      <button type="button" onClick={ goToCheckoutPage }>GO TO CHECKOUT</button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;