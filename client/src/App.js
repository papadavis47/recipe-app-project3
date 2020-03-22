import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
import Header from './wrappers/Header';
import Content from './content/Content';

const App = function() {
  let [user, setUser] = useState(null);
  let [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(()=> {
    decodeToken();
  }, []);

  const updateUser = newToken => {
    if (newToken) {
      localStorage.setItem('mernToken', newToken);
      decodeToken(newToken);
    } else {
      setUser(null);
    }
  }

  const decodeToken = existingToken => {
    let token = existingToken || localStorage.getItem('mernToken');
    if (token) {
      let decoded = jwtDecode(token);
      if (!decoded || Date.now() >= decoded.exp * 1000) {
        console.log("Token expired!");
        setUser(null);
      } else {
        setUser(decoded);
      }
    } else {
      setUser(null);
    }
  }
  

  return (
    <Router>
      <div className="App">
        <Header searchedRecipes={searchedRecipes} setSearchedRecipes={setSearchedRecipes} updateUser={updateUser} user={user} />
        <main>
          <Content searchedRecipes={searchedRecipes} updateUser={updateUser} user={user} />
        </main>
      </div>
    </Router>
  );
}

export default App;