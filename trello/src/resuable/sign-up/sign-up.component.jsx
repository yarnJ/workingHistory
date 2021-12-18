import React from "react";
import ButtonComponent from "../button/button.component";
import FormInput from "../formInput/form-input.component";
import '../sign-up/sign-up.style.scss';

const SignUp = ({ label, value, style })=> {
  return(
    <div className="signUp-area">
      <div className="form-area">
        <FormInput value={ value } type="email" title="form-input"/>
      </div>

      <div className="button-area">
        <ButtonComponent label={ label } style = { style }></ButtonComponent>
      </div>
    </div>
  )
};

export default SignUp;