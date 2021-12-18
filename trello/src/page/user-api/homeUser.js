import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const HomeUserComponent = () => {

  const [error, seterror] = useState(null);
  const [user, setuser] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users/")
    //   .then(res => res.json())
    //   .then((data) => {
    //     setuser(data);
    //     setisLoaded(true);
    //     console.log(data, "data");
    //   },
    //   (error) => {
    //     setisLoaded(true);
    //     seterror(error);
    //     console.log("error");
    //   }
    //   );
    axios.get("https://jsonplaceholder.typicode.com/users/")
      .then(res => {
        setuser(res.data);
        setisLoaded(true);
      },
      (error) => {
        setisLoaded(true);
        seterror(error);
      }
      );
  }, []);

  if(error){
    return(
      <div>Error; { error.message }</div>
    ) 
  } else if(!isLoaded) {
    return(
      <div>isLoad...</div>
    )
  } else {
    return(
      <div style={{ paddingTop: "5rem" }}>
        {user.map((user, index) => (
          <Link key={ index } id={user.id} to={`/homeuser/${user.id}`}>{ user.name }</Link>
        ))}
      </div>
    )
  }
};

export default HomeUserComponent;