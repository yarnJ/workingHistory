import React from "react";
import { Card, Container, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as HeaderLogo } from '../../assets/homepage/header/logo.svg';
import { ReactComponent as ResponseHeaderLogo } from '../../assets/homepage/what-we-do/environment/vector.svg';
import HEADER_ITEM_DATA from "./header-item-data";
import ButtonComponent from "../reusebal/buttonComponent";
import { useState, useEffect } from "react";
import HeaderItemComponent from "./headerItem.component";
import { toggleResponseNav } from "../../redux/header/header.action";
import { useDispatch } from "react-redux";
import callLogo from "../../assets/homepage/header/call1.svg";
import "../header/header.style.scss";

const HeaderComponent = () => {

  const [headerItemData, setHeaderItemData] = useState([]);
  const dispatch = useDispatch();

  const buttonStyle = {
    background: "#F22751",
    border: "1px solid #FFFFFF",
    boxSizing:"border-box",
    borderRadius: "3px",
    padding: "10px 20px",
    width: "129px",
    height: "45px",
    color: "#FFFFFF",
    fontWeight: "500",
    display: "flex",
    justifyContent: "space-between"
  };

  const contactPath = "contact";

  useEffect(() => {
    setHeaderItemData(HEADER_ITEM_DATA);
  }, []);

  return(
    <div className="header-side">
      <Card.Header  bg="light" expand="lg">
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Navbar>
            <Navbar.Brand>
              <HeaderLogo className="header-logo"/>
              <ResponseHeaderLogo className="response-header-logo" style={{ display: 'none' }}/>
            </Navbar.Brand>
          </Navbar>

          <Navbar>
            <Nav className="original-nav">
              {headerItemData.map((headerItemData) => (
                <HeaderItemComponent key={ headerItemData.id } headerItemData={ headerItemData }/>
              ))}
            </Nav>
            <ButtonComponent style={ buttonStyle } src={ callLogo } path={contactPath} label="Contact"/>
          </Navbar>

          <li className="w3-xxxlarge" style={{ display: 'none' }} onClick={() => dispatch(toggleResponseNav())}><i className="fa fa-bars"></i> Home</li>

        </Container>
      </Card.Header>
    </div>
  )
};

export default HeaderComponent;