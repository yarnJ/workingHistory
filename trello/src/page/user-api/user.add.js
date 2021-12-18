import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

const UserAddComponent = () => {

  const url = "https://jsonplaceholder.typicode.com/users/";
  const [name, setname] = useState('');
  const [user, setUser] = useState([]);

  const handleChange = event => {
    // event.preventDefault();

    // useEffect(() => {
      setname(event.target.value);
    // })
  }

  useEffect(() => {
    console.log(name);
    setUser({name: name});
  }, [name])

  const handleSubmit = event => {

    axios.post(url, {user})
      .then(res => {
        console.log(res);
      });
    
  }

  return(
    <form onSubmit={handleSubmit} style={{paddingTop: "5rem"}}>
      <label>
        Person Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  )
};

export default UserAddComponent;