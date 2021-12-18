import React from "react";
import FOOTER_ITEM_DATA from "./footer.item.data";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import FooterCategoryItemComponent from "./footer.category.item.component";

const FooterCategoryComponent = () => {

  const [footerItemData, setFooterItemData] = useState([]);

  useEffect(() => {
    setFooterItemData(FOOTER_ITEM_DATA);
  }, []);

  return(
    <Row>
      {footerItemData.map(({...otherFooterCategoryComponent}, index) => (
        <Col key={ index }>
          <FooterCategoryItemComponent {...otherFooterCategoryComponent }/>
        </Col>
      ))}
    </Row>
  )
};

export default FooterCategoryComponent;