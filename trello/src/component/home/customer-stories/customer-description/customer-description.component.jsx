import React from "react";
import '../../customer-stories/customer.style.scss';


const CustomerDescriptionComponent = ({ descriptionData }) => {
  return(
    <div>
          <div className="svg-area">
            {/* <svg role="img" ariaLabel="Quote" fill="none" height="41" viewBox="0 0 55 41" width="55" xmlns="http://www.w3.org/2000/svg">
              <path d={ descriptionData.path }></path>
            </svg> */}
            <svg role="img" aria-label="Quote" fill="none" height="41" viewBox="0 0 55 41" width="55" xmlns="http://www.w3.org/2000/svg"><path d="m53.76 28.32c0-7.32-3.84-11.4-11.64-11.52 1.68-2.64 6.36-4.08 12.6-4.44v-12.36c-17.28.960002-26.88 10.2-26.88 24.24 0 11.4 5.64 16.08 13.2 16.08 7.92 0 12.72-4.68 12.72-12zm-27.84 0c0-7.32-3.84-11.4-11.64-11.52 1.68-2.64 6.36-4.08 12.6-4.44v-12.36c-17.28.960002-26.88 10.2-26.88 24.24 0 11.4 5.64 16.08 13.2 16.08 7.92 0 12.72-4.68 12.72-12z"></path></svg>
          </div>
      {descriptionData.map((descriptionData, index) => (
        <div className="customerDes-area" key={index}>

          <div className="description-area">
            { descriptionData.description }
          </div>

          <div className="footer-area">
            <div style={{float: "right"}}>
              <h5>{ descriptionData.name }</h5>
              { descriptionData.position }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default CustomerDescriptionComponent;