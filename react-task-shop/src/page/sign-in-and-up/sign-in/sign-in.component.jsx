// import { render } from "@testing-library/react";
import { useState } from "react";
import FormInput from "../formInput/form-input.component";
import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = (props) => {

  const [ email, setEmail ] = useState([]);
  const [ password, setPassword ] = useState([]);

  const handleChange =(e) => {
    setEmail(e.target.value);
  }

  const handleChange1 =(e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    console.log(email, password);
  }
  
  return(
    <div className="signIn">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={ handleSubmit }>
        <FormInput type="email" name="email" value={ email } handleChange={handleChange} label="email" required></FormInput>

        <FormInput type="password" name="password" value={ password } handleChange={handleChange1} label="password" required></FormInput>

        <button type="submit">SIGN IN</button>
        <button onClick={ signInWithGoogle }>SIGN IN WITH GOOGLE</button>
      </form>
    </div>
  )
}

export default SignIn;