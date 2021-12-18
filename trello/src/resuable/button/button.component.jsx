import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../button/button.style.scss';

const ButtonComponent = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(`/${ props.path }`);
  }

  return(
    <button className="customButton" style={ props.style } onClick={
      props.label === "next" || props.label === "prev" ? (num) => dispatch(props.onClick(num))
      : handleChange
    }>
      { props.label }
    </button>
  )
};

export default ButtonComponent;