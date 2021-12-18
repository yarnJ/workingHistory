import React from "react";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router";

const ButtonComponent = (props) => {

  const navigate = useNavigate();
  const handleChange = () => {
    navigate(`/${props.path}`);
  }

  return(
    <Button variant="light" style={ props.style } onClick={ props.path ? handleChange : null }> 
      <Image src={ props.src }/>
      {props.label} 
    </Button>
  )
};

export default ButtonComponent;