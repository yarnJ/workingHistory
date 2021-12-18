import React from "react";
import ImageComponent from "../../reusebal/image.component";
import contactLogo from '../../../assets/homepage/contact/contact-call-icon.svg';
import ContactSocialComponent from "../contact-social/contact.social.component";
import SOCIAL_IMAGE_DATA from "../contact-social/contact.social.data";
import { useState, useEffect } from "react";
import '../../contact/contact.style.scss';

const ContactGladComponent = () => {

  const [ socialImageData, setSocialImageData ] = useState([]);

  useEffect(() => {
    setSocialImageData(SOCIAL_IMAGE_DATA);
  }, []);

  return(
    <div className="contact-glad-area">
      <ImageComponent src={contactLogo}/>

      <h1>We are glad <br/>to <span>help</span></h1>

      <div className="contact-social-side">
        <ContactSocialComponent socialImagedata = { socialImageData }/>
      </div> 

      <p>
        <strong>Are you interested in working with us?</strong><br/>
        Please fill the form to know about you better and to make an appoitment tailored for you
      </p> 
    </div>
  )
};

export default ContactGladComponent;