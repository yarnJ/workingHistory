import React from "react";
import '../../../page/what-we-do/technology/technology.style.scss';
import TechonologyItemComponent from "./technology-item/technology.item.component";
import TECHNOLOGY_DATA from "./technology.data";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const TechnologyComponent = () => {

  const [technologyData, setTechnologyData] = useState([]);

  useEffect(() => {
    setTechnologyData(TECHNOLOGY_DATA);
  }, []);

  return(
    <div className="technology-side">
      <Container>
        <p>Professional Services for State Of</p>

      <h1>The Art Technologies</h1>

      <div className="technology-item-area">
        {technologyData.map((technologyData) => (
          <TechonologyItemComponent technologyData = {technologyData} key = {technologyData.id}/>
        ))}
      </div>
      </Container>
    </div>
  )
};

export default TechnologyComponent;