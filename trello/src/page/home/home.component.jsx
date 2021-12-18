import React from "react";
import CheckoutComponent from "../../../src/component/home/check-out/checkout.component"
import CustomerComponent from "../../../src/component/home/customer-stories/customer.component";
import FeatureComponent from "../../../src/component/home/features/feature.component";
import HeroComponent from "../../../src/component/home/hero/hero.component";
import ProductComponent from "../../../src/component/home/product/product.component";

const HomeComponent = () => {
  return(
    <div className="home-side">
      <HeroComponent/>

      <ProductComponent/>

      <FeatureComponent/>

      <CheckoutComponent/>

      <CustomerComponent/>
    </div>
  )
};

export default HomeComponent;