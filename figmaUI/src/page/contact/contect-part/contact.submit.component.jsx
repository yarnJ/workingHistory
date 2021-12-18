import React from "react";
import FormInputComponent from "../../reusebal/form-input.component";
import ButtonComponent from "../../reusebal/buttonComponent";
import '../../contact/contact.style.scss';

const ContactSubmitComponent = () => {

  const contactButtonStyle = {
    backgroundColor: "#F22751",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "25px",
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: "unset !important",
    boxSizing: "border-box",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "93px",
    height: "45px"
  };

  const contactInputStyle = {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "2rem",
    lineHeight: "3rem",    
    color: "#E3E3E3",
    border: "0",
    borderBottom: "2px solid #EBEBEB",
    borderRadius: "unset !important"
  };

  return(
    <div className="contact-submit-area">
      <label>Tell us your name</label>

      <div className="input-area">
        <FormInputComponent placeholder="Type your answer here..." style={ contactInputStyle }/>
      </div>

      <div className="button-area">
        <ButtonComponent label="Submit" style={ contactButtonStyle }/>
      </div>
    </div>
  )
};

export default ContactSubmitComponent;