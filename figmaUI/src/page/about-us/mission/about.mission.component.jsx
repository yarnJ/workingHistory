import React from "react";
import '../../about-us/about.style.scss';

const AboutMissionComponent = (props) => {
  return(
    <div className="about-mission-area">
      {props.aboutMissionData.map(aboutMissionData => (
        <div key="1">
          <p>{ aboutMissionData.question }</p>

          <h1>{ aboutMissionData.title }</h1>

          <p>{ aboutMissionData.description }</p>
        </div>
      ))}
    </div>
  )
};

export default AboutMissionComponent;