import React from "react";
import PRODUCT_DATA from "./product.data";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductItemComponent from "./product.item.component";
import { Row, Col } from "react-bootstrap";
import '../../../page/what-we-do/product/product.style.scss';

const ProductComponent = () => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(PRODUCT_DATA);
  }, []);

  return(
    <div className="product-side">
      <Container>
        <p>WHAT WE DO</p>

        <h1>We build and manage <span>infrastructure</span> so your team can focus on your product ..</h1>

        <div className="product-item-side">
          <Row>
            {productData.map(({id, ...otherProductComponentProps}, index) => (
              <Col xs={9} md={6} key={index}>
                <ProductItemComponent {...otherProductComponentProps}/>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
};

export default ProductComponent;

