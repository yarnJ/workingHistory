import React from "react";
import '../formInput/form-input.style.scss';

const FormInput = (props) => {
  return(
    <div className="form-input-area">
      <input 
      className={props.title} 
      style={props.style} 
      type={props.type} 
      range={props.range} 
      in={props.min} 
      max={props.max} 
      value={props.value}
      onChange={props.onChange ? props.onChange : null}
      placeholder={props.placeholder}
      ></input>
    </div>
  )
};

export default FormInput;