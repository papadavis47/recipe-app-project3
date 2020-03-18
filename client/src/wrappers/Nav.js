import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    // TODO: implement conditional rendering with auth
    return(
        <nav>
            <ul className="App-nav">
                <li className="App-nav-link">
                    <Link to="/about" className="App-link">About</Link>
                </li>
                <li className="App-nav-link">
                    <Link to="/authors" className="App-link">Authors</Link>
                </li>
                <li className="App-nav-link">
                    <Link to="/auth/login" className="App-link">Login</Link>
                </li>
                <li className="App-nav-link">
                    <Link to="/auth/signup" className="App-link">Sign up</Link>
                </li>
            </ul>
        </nav>
    )
}