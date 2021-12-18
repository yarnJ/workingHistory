import React from "react";
import CustomerItemComponent from "./customer.item.component";
import CUSTOMER_INFO_DATA from "../customer.info.data";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "../../../../page/what-we-do/customer/customer.style.scss";

const CustomerInfoComponent = () => {

  const [customerInfoData, setCustomerInfoData] = useState([]);

  useEffect(() => {
    setCustomerInfoData(CUSTOMER_INFO_DATA);
  }, []);

  return(
    <div className="customer-info-area">
      <Row>
        {customerInfoData.map(({id, ...otherCustomerInfoComponentProps}, index) => (
          <Col xs={9} md={6} key={index}>
            <CustomerItemComponent { ...otherCustomerInfoComponentProps }/>
          </Col>
        ))}
      </Row>
    </div>
  )
};

export default CustomerInfoComponent;