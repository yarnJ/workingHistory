import React from "react";
import { Image } from "react-bootstrap";
import '../../../page/what-we-do/product/product.style.scss';

const ProductItemComponent = ({id, title, imgUrl, description}) => {
  return(
    <div className="product-item" id = {id}>
      <Image src={imgUrl.default}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
};

export default ProductItemComponent;