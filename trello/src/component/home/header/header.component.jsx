import React from "react";
import ButtonComponent from "../../../../src/resuable/button/button.component";
// import { auth } from "../../../firebase/firebase.utils";
import '../header/header.style.scss';

const Header = ({ currentUser }) => {

  return(
    <div className="header-side">
      <div className="logo-area">
        <span>Trello</span>      
      </div>

      <div className="button-area">
        {currentUser? <p>{ currentUser }</p> : null}
        <ButtonComponent label="Go to you boards"  style={{ border: "1px solid transparent" }}/>
      </div>
    </div>
  )
};

export default Header