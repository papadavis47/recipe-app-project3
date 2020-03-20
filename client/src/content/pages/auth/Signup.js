// Packages
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function Signup(props) {
  // Declare and initialize state variables
  let [message, setMessage] = useState('')
  let [email, setEmail] = useState('')
  let [name, setName] = useState('')
  let [password, setPassword] = useState('')
  let [image, setImage] = useState('')
  let [bio, setBio] = useState('');


  useEffect(()=> {
    setMessage("");
  }, [name, email, password, image, bio])

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: Send the user sign up data to the server
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        image,
        bio
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        console.log(response);
        setMessage(`${response.status}: ${response.statusText}`);
        return;
      }
      //if user signded up successfully
      response.json().then(result => {
        props.updateUser(result.token);
      })
    })
  }

  if (props.user) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      <h2>Signup</h2>
      <span className="red">{message}</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Profile Pic URL:</label>
          <input type="url" name="image" onChange={e => setImage(e.target.value)} />
        </div>
        <div>
          <label>Bio:</label>
          <input type="text" name="bio" placeholder="Say something about yourself" onChange={e => setBio(e.target.value)} />
        </div>
        <button type="submit">Sign Me Up!</button>
      </form>
    </div>
  )
}

