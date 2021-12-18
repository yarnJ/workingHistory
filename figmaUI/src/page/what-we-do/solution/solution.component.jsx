import React from "react";
import SolutionDescriptionComponent from "./solution.description.component";
import SolutionCodeDescriptionComponent from "./solution-code-description/solution.code.description.component";
import SOLUTION_CODE_DATA from "./solution.code.data";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../../page/what-we-do/solution/solution.style.scss";

const SolutionComponent = () => {

  const [solutionCodeData, setSolutionCodeData] = useState([]);

  useEffect(() => {
    setSolutionCodeData(SOLUTION_CODE_DATA);
  }, []);

  return(
    <div className="solution-side">
      <Container>
        <SolutionDescriptionComponent/>

        <SolutionCodeDescriptionComponent solutionCodeData={ solutionCodeData }/>
      </Container>
    </div>
  )
};

export default SolutionComponent;