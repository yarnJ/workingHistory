// import React from "react";
import FormInput from "../formInput/form-input.component";
import { auth } from "../../firebase/firebase.utils";
import { creatUserProfileDocument } from "../../firebase/firebase.utils";
import { useState } from "react";
import '../sign-up/sign-up.style.css';

const SignUp = () => {
  // const [userDetail, setUserDetail] = useState({})
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange1 = (e) => {
    // e.preventDefault();
    // setUserDetail({
      setDisplayName(e.target.value);
    //  });
  }

  const handleChange2 = (e) => {
    // e.preventDefault();
    // setUserDetail({
      setEmail(e.target.value);
    //  });
  }

  const handleChange3 = (e) => {
    // e.preventDefault();
    // setUserDetail({
      setpassword(e.target.value);
    //  });
  }

  const handleChange4 = (e) => {
    // e.preventDefault();
    // setUserDetail({
      setConfirmPassword(e.target.value);
    //  });
  }

  const handleSubmit = async event => {
    console.log(displayName, email, password);
    if(password !== confirmPassword) {
      alert('password does not match!!!');
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await creatUserProfileDocument(user, { displayName });

        setDisplayName('');
        setEmail('');
        setpassword('')
        setConfirmPassword('');
    }catch(error) {
      console.error(error);
    }
  };

  return(
    <div className="sign-up">
      <form className="sign-up-form" onSubmit={ handleSubmit }>
        <FormInput type="name" value={ displayName } handleChange={ handleChange1 } label="Display Name" required></FormInput>
        <FormInput type="email" value={ email } handleChange={ handleChange2 } label="Email" required></FormInput>
        <FormInput type="password" value={ password } handleChange={ handleChange3 } label="Password" required></FormInput>
        <FormInput type="password" value={ confirmPassword } handleChange={ handleChange4 } label="ConfirmPassword" required></FormInput>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  )
}

export default SignUp;
