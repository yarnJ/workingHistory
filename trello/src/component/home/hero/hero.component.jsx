import React from "react";
import HeroDescription from "../../../component/home/hero/hero-description/hero-description.component";
import ImageFeature from "../../../resuable/imageFeature/imageFeature.component";
import SignUp from "../../../resuable/sign-up/sign-up.component";
import HeroDescription_Data from "./heroDescription-data";
import { useState, useEffect } from "react";
import imgUrl from '../../../assest/home/hero.png';
import '../hero/hero.style.scss';

const HeroComponent = () => {

  const [heroDescription, setHeroDescription] = useState([]);

  useEffect(() => {
    setHeroDescription(HeroDescription_Data);
  }, []);

  return(
    <div className="hero-side">
      <div className="description-area">
        <HeroDescription id={ heroDescription.id } value = { heroDescription }/>

        <SignUp label="Sign up-it's free!" value="Email" style={{ border: "1px solid transparent" }}/>
      </div>

      <div className="image-area">
        <ImageFeature src={ imgUrl }/>
      </div>
    </div>
  )
};

export default HeroComponent;