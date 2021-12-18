import React from "react";
// import '../header/header.style.css';
import { HeaderContainer, LogoContainer, OptionContainer } from "./header.styels";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";

const Hearder = ({ currentUser }) => {

  const hidden = useSelector(e => e.cart.hidden);

  return(
    <HeaderContainer>
      <Link className="logo-container" to="/shop-page">
        <h1>LOGO</h1>
      </Link>

      <OptionContainer>
        <Link className="option" to='/shop'>
          SHOP
        </Link>

        <Link className="option" to='/contect'>
          CONTECT
        </Link>

        { currentUser ? 
          <div className="option" onClick={() => auth.signOut() }>
            SIGN OUT 
          </div>
          :
          <div>
            <Link to="/signin">SIGN IN</Link>
            <Link to="/signup">SIGN up</Link>
          </div>
        }

        <CartIcon/>
      </OptionContainer>
      {
        hidden 
        ? 
        null 
        : <CartDropdown/>
      }
    </HeaderContainer>
  )
}


export default Hearder;