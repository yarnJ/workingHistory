import React from "react";
import { Image, Container } from "react-bootstrap";
import "../../../../page/what-we-do/environment/environment.style.scss";

const EnvironmentItemComponent = ({ environmentData }) => {
  return(
    <div className="environment-item-area">
      <Container>
        {environmentData.map(environmentData => (
          <div className="environment-item" key={environmentData.id}>
            <Image src={ environmentData.imgUrl.default }></Image>

            <h3>{ environmentData.title }</h3>

            <p>{ environmentData.description }</p>
          </div>
        ))}
      </Container>
    </div>
  )
};

export default EnvironmentItemComponent;

