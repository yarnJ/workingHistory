import React from "react";
import ImageComponent from "../../../../reusebal/image.component";
import '../../../../about-us/about.style.scss';

const AboutPartnersSocialComponent = ({ aboutPartnersData }) => {

  const aboutPartnersSocialStyle = {
    paddingRight: "2rem"
  }

  return(
    <div className="about-partners-social-area">
      {aboutPartnersData.social.map(social => (
        <ImageComponent key={ social.id } src={social.imgUrl.default} style={ aboutPartnersSocialStyle }/>
      ))}
    </div>
  )
};

export default AboutPartnersSocialComponent;