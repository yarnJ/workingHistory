import React from "react";
import { signInWithGoogle } from "../../../../src/firebase/firebase.utils";
import "../sign-in-up/signinup.style.scss";

const SignInComponent = () => {
  return(
    <div className="signIn-side">
      <button onClick={ signInWithGoogle }>SIGN IN WITH GOOGLE</button>
    </div>
  )
};

export default SignInComponent;