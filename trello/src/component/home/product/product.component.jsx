import React from "react";
import PRODUCT_DATA from "../../../../src/component/home/product/product-data";
import { useState, useEffect } from "react";
import HeroDescription from "../../../component/home/hero/hero-description/hero-description.component";
import ButtonComponent from "../../../resuable/button/button.component";
import ImageFeature from "../../../resuable/imageFeature/imageFeature.component";
import ProductLogoComponent from "./product-logo/product-logo.component";
import imgUrl from '../../../assest/product/board.png';
import './product.style.scss';

const ProductComponent = () => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(PRODUCT_DATA);
  }, []);

  return(
    <div className = "product-side">
      <div className="product-description">
        <HeroDescription value = { productData }/>

        <ButtonComponent label = "Start doing →" style={{ backgroundColor: "transparent", color: "#0065ff", borderColor: "#0065ff", border: "1px solid #5a67ff" }}/>
      </div>

      <div className="product-img">
        <ImageFeature src = { imgUrl }/>
      </div>

      <div className="product-logo">
        <p>Join over 1,000,000 teams worldwide that are using Trello to get more done.</p>

        <ProductLogoComponent/>
      </div>
    </div>
  )
};

export default ProductComponent;