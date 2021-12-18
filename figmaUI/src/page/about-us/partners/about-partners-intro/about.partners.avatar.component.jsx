import React from "react";
import ImageComponent from "../../../reusebal/image.component";
import '../../../about-us/about.style.scss';

const AboutPartnersAvatarComponent = (props) => {
  return(
    <div className="about-partners-avatar-area">
      <ImageComponent src={ props.imgUrl.default }/>
    </div>
  )
};

export default AboutPartnersAvatarComponent;