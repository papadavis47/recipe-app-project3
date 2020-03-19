import React from 'react';
import Nav from './Nav';
import Search from './Search'
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="App-header">
            <Link to="/" className="App-link"><h1>No BS Recipes</h1></Link>
            <Nav updateUser={props.updateUser} user={props.user} />
            <Search />
        </header>
    )
}