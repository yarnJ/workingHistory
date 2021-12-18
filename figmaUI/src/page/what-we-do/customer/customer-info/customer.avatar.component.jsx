import React from "react";
import { Image } from "react-bootstrap";
import "../../../../page/what-we-do/customer/customer.style.scss";

const CustomerAvatarComponent = (props) => {
  return(
    <div className="customer-avatar">
        <Image src={props.src}/>
    </div>
  )
};

export default CustomerAvatarComponent;