import React from "react";
import ImageFeature from "../../../../resuable/imageFeature/imageFeature.component";
import '../../customer-stories/customer.style.scss';

const CustomerAdComponent = ({ adData }) => {
  console.log(adData.title);
  return(
    <div>
      {adData.map((adData, index) => (
        <div className="customerAd-area" key={index}>
          <ImageFeature src={ adData.imgUrl } style={{ height: "80px", width: "192px", marginBottom: "4rem" }}/>
    
          <h5>{ adData.title }</h5>
          <h3>{ adData.affair }</h3>
        </div>
      ))}
    </div>
  )
};

export default CustomerAdComponent;