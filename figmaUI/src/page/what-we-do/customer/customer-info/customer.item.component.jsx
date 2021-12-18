import React from "react";
import CustomerDescriptionComponent from "./customer.description.component";
import CustomerAvatarComponent from "./customer.avatar.component";
import "../../../../page/what-we-do/customer/customer.style.scss";

const CustomerItemComponent = ({ id, imgUrl, title, description, name, position }) => {
  return(
    <div className="customer-item">
      <CustomerDescriptionComponent title={title} description={description}/>

      <CustomerAvatarComponent src={imgUrl.default} name={name} position={position}/>
    </div>
  )
};

export default CustomerItemComponent;