import React from 'react';
import Nav from './Nav';
import Search from './Search'
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="App-header white-bg">
            <div>
                <Link to="/" className="App-link">
                    <h1 className="fancy">NoScroll <span className="italic">Recipes</span></h1>
                </Link>
                <div className="red-line"></div>
                <div className="orange-line"></div>
            </div>
            <div className="Nav-links">
                <Nav className="white-bg" updateUser={props.updateUser} user={props.user} />
                <Search setSearchedRecipes={props.setSearchedRecipes} searchedRecipes={props.searchedRecipes} />
            </div>
        </header>
    )
}