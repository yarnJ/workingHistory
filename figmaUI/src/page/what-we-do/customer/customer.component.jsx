import React from "react";
import CustomerSummaryComponent from "./customer-summary/customer.summary.component";
import CustomerInfoComponent from "./customer-info/customer.info.component";
import { Container } from "react-bootstrap";
import "../../../page/what-we-do/customer/customer.style.scss";

const CustomerComopnent = () => {
  return(
    <div className="customer-side">
      <Container>
        <div className="customer-summary-side">
          <CustomerSummaryComponent/>
        </div>

        <div className="customer-info-side">
          <CustomerInfoComponent/>
        </div>
      </Container>
    </div>
  )
};

export default CustomerComopnent;