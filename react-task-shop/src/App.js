import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './page/shop/shop.page.component';
import Hearder from './page/header/header.component';
import Collection from './page/collectionItem/collection.component';
import SignIn from './page/sign-in-and-up/sign-in/sign-in.component';
import SignUp from './page/sign-in-and-up/sign-up/sign-up.component';
import CheckOut from './page/check-out/check-out.component';
import { auth, creatUserProfileDocument } from './page/firebase/firebase.utils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';
import React from 'react';

const App = () => {

  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      dispatch(setCurrentUser(user));
      creatUserProfileDocument(user);
    });
    
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Hearder currentUser={ currentUser }/>
        <Routes>
          <Route path="/shop-page/*" element={ <ShopPage/> }/>
          <Route path="/shop" element = { <Collection/> }>
          </Route>
          <Route exact path="/signin" element={ <SignIn/> }/>
          <Route path='/signup' element = { <SignUp/> }/>
          <Route path='/checkout' element = { <CheckOut/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;