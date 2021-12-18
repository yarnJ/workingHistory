import React from "react";
import { ReactComponent as FooterLogo } from "../../assets/homepage/footer/footer-logo.svg";
import { ReactComponent as HeartLogo } from "../../assets/homepage/footer/heart.svg";
import { Image, Col, Row } from "react-bootstrap";
import LOGO_DATA from "./logo.data";
import { useState, useEffect } from "react";
import '../../page/footer/footer.style.scss';

const CopyrightComponent = () => {

  const [logoData, setLogoData] = useState([]);

  useEffect(() => {
    setLogoData(LOGO_DATA);
  }, []);

  return(
    <div>
      <div className="footLogo-area">
        <FooterLogo/>
      </div>

      <div className="copyright-area">
        <span>© 2020 Mineiros GmbH. All rights reserved.</span><br/>

        <span>Made with 
          <HeartLogo/>
        in Berlin</span>
      </div>

      <div className="image-area">
        <Row>
          {logoData.map(logoData => (
            <Col key={logoData.id} xs={4} md={3}>
              <Image id={logoData.id} src={ logoData.imgUrl.default }/>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
};

export default CopyrightComponent;