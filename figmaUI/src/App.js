
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './page/header/header.component';
import FooterComponent from './page/footer/footer.component';
import { useSelector } from "react-redux";
import ResponseNavbarComponent from './page/header/responseNavbar.component';
import WhatWeDoComponent from './page/what-we-do/what.we.do.component';
import ContactComponent from './page/contact/contact.component';
import AboutComponent from './page/about-us/about.component';

const App = () => {

  const responseNavHidden = useSelector(state => state.header.responseNavHidden);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent/>
        {
          responseNavHidden ? null
          : <ResponseNavbarComponent/>
        }
        <Routes>
          <Route exact path="/" element = {<WhatWeDoComponent/>}/>
          <Route exact path="/whatwedo" element = {<WhatWeDoComponent/>}/>
          <Route exact path="/contact" element = {<ContactComponent/>}/>
          <Route exact path="/about" element = {<AboutComponent/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
