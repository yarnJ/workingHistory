import './App.css';
import Header from '../src/component/home/header/header.component';
import HomeComponent from '../src/page/home/home.component';
import SignInComponent from '../src/component/home/sign-in-up/signIn.component';
import TrelloPricingComponent from '../src/page/trello-pricing/trello.pricing.component';
import TrelloTourComponent from '../src/page/trello-tour/trello.tour.component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "../src/firebase/firebase.utils";
import { setCurrentUser } from './redux/user/user.action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import HomeUserComponent from './page/user-api/homeUser';
import UserComponent from './page/user-api/user';
import UserAddComponent from './page/user-api/user.add';


const App = () => {

  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Header currentUser={ currentUser }/>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>}></Route>
          <Route  path="/signin" element={<SignInComponent/>}></Route>
          <Route path="/trello-pricing" element={<TrelloPricingComponent/>}></Route>
          <Route path="/trello-tour" element={<TrelloTourComponent/>}></Route>
          <Route path="/homeuser" element={<HomeUserComponent/>}/>
          <Route path="/homeuser/:userId" element={<UserComponent/>}/>
          <Route path="/homeuser/user-add" element={<UserAddComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
