import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const handleLogout = e => {
        e.preventDefault()
        // Remove the token from localstorage
        localStorage.removeItem('mernToken')
        // TODO: Update the state of the App
        props.updateUser();
    }
    // links that show when user is not logged in
    let links = (
        <span>
            <li className="App-nav-link">
                <Link to="/auth/login" className="App-link">Login</Link>
            </li>
            <li className="App-nav-link">
                <Link to="/auth/signup" className="App-link">Sign up</Link>
            </li>
        </span>
    )

    // links that show when user is logged in
    if (props.user) {
        links = (
          <span>
            <li>Hello {props.user.name}!</li>
            <li className="App-nav-link"> 
              <Link to="/profile" className="App-link">Profile</Link>
            </li>
            <li className="App-nav-link">
              <Link to="/" onClick={handleLogout} className="App-link">Log out</Link>
            </li>
          </span>
        )
    }

    return(
        <nav>
            <ul className="App-nav">
                <li className="App-nav-link">
                    <Link to="/about" className="App-link">About</Link>
                </li>
                <li className="App-nav-link">
                    <Link to="/authors" className="App-link">Authors</Link>
                </li>
                {links}
            </ul>
        </nav>
    )
}