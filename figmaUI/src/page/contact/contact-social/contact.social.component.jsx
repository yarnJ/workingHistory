import React from "react";
import ImageComponent from "../../reusebal/image.component";
import '../../contact/contact.style.scss';

const ContactSocialComponent = ({socialImagedata}) => {
  return(
    <div className="contact-social-area">
      {socialImagedata.map(socialImagedata => (
        <ImageComponent key={ socialImagedata.id } src = { socialImagedata.imgUrl.default }/>
      ))}
    </div>
  )
};

export default ContactSocialComponent;