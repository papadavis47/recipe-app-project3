import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// import all the pages
import Home from './pages/Home';
import NewRecipe from './pages/recipes/NewRecipe';
import EditRecipe from './pages/recipes/EditRecipe.js';
import ShowRecipe from './pages/recipes/ShowRecipe';
import Recipes from './pages/recipes/Recipes';
import EditProfile from './pages/profile/EditProfile';
import Profile from './pages/profile/Profile';
import Authors from './pages/authors/Authors';
import ShowAuthor from './pages/authors/ShowAuthor';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

export default function Content(props) {
    // todo: add all routes
    return (
        <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/recipes/new" render={NewRecipe} />
            <Route path="/recipes/:id/edit" render={EditRecipe} />
            <Route path="/recipes/:id" render={ShowRecipe} />
            <Route path="/recipes" render={Recipes} />
            <Route path="/profile/edit" render={EditProfile} />
            <Route path="/profile" render={Profile} />
            <Route path="/authors/:id" render={ShowAuthor} />
            <Route path="/authors" render={Authors} />
            <Route path="/auth/login" render={Login} />
            <Route path="/auth/signup" render={Signup} />
        </div>
    )

}