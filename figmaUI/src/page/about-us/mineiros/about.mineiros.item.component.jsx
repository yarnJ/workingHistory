import React from "react";
import ButtonComopnent from "../../reusebal/buttonComponent";
import ABOUT_MINEIROS_BUTTON_DATA from "../about.mineiros.button.data";
import { useState, useEffect } from "react";
import '../../about-us/about.style.scss';

const AboutMineirosItemComponent = () => {

  const [aboutMineirosbuttonData, setaboutMineirosbuttonData] = useState([]);

  useEffect(() => {
    setaboutMineirosbuttonData(ABOUT_MINEIROS_BUTTON_DATA);
  }, []);

  return(
    <div className="about-mineiros-item-side">
      <div className="about-mineiros-item-description">
        <h1>Who are <br/><span>MINEIROS?</span></h1>

        <p>We are a remote-first company headquartered in Berlin, Germany that solves development, automation and security challenges in cloud infrastructure. We are working on open-source products that support development teams to create better software.</p>
      </div>

      {aboutMineirosbuttonData.map(obj => (
        <ButtonComopnent key = "1" 
        label={ obj.label } 
        src={ obj.imgUrl.default }  
        path={obj.path} 
        style={ obj.style }/>
      ))}
    </div>
  )
};

export default AboutMineirosItemComponent;
