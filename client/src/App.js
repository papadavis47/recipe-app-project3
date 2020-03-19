import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
import Header from './wrappers/Header';
import Content from './content/Content';

function App() {
  let [user, setUser] = useState(null);

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
        <Header updateUser={updateUser} user={user} />
        <main>
          <Content updateUser={updateUser} user={user} />
        </main>
      </div>
    </Router>
  );
}

export default App;
