import React from "react";
import ServiceComponent from "./service/service.component";
import TechnologyComponent from "./technology/technology.component";
import ProductComponent from "./product/product.component";
import TechnologyCategoryComponent from "./technology-category/technology.category.component";
import EnvironmentComponent from "./environment/environment.component";
import CustomerComopnent from "./customer/customer.component";
import SolutionComponent from "./solution/solution.component";

const WhatWeDoComponent = () => {
  return(
    <div className="what-we-do">
      <ServiceComponent/>

      <TechnologyComponent/>

      <ProductComponent/>

      <TechnologyCategoryComponent/>

      <EnvironmentComponent/>

      <CustomerComopnent/>
      
      <SolutionComponent/>
    </div>
  )
};

export default WhatWeDoComponent;