import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../header/header.style.scss';


const HeaderItemComponent = ({headerItemData}) => {
  return(
    <div className="header-item-side">
      {headerItemData.id !== 2 ? 
        <Link to={`/${headerItemData.path}`}>{ headerItemData.name }</Link>
        // <Nav.Link href={`/${headerItemData.path}`}>{ headerItemData.name }</Nav.Link>
      : 
        <NavDropdown title={ headerItemData.name } id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      }
      
    </div>
  )
};

export default HeaderItemComponent;