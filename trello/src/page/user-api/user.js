import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserComponent = (props) => {
  const location = useLocation();
  const userId = location.pathname.slice(10);

const [users, setusers] = useState([]);
const [isLoaded, setisLoaded] = useState(false);
const [error, seterror] = useState(null);
const url = "https://jsonplaceholder.typicode.com/users/";
const navigate = useNavigate();

useEffect(() => {
  fetch(url + userId)
    .then(res => res.json())
    .then((data) => {
      setusers(data);
      setisLoaded(true);
    },
    (error) => {
      seterror(error);
      setisLoaded(true);
    }
    );
}, []);

const deleteUser = () => {
  axios.delete(url + `${users.id}`)
    .then(res => {
      console.log(res);
      navigate("/homeuser");
    });
};

  if(error) {
    return(
      <div>{ error.message }</div>
    )
  } else if(!isLoaded) {
    return(
      <div>isLoad...</div>
    )
  } else if(users) {
    return(
      <div>
        <ul>
          <li>{ users.name }</li>
          <li>{ users.email }</li>
          <li>{ users.phone }</li>
          <li>{ users.website }</li>
        </ul>

        <form onSubmit={deleteUser}>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
};

export default UserComponent;