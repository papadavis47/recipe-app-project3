import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// import all the pages
// import Home from './pages/Home';
import NewRecipe from './pages/recipes/NewRecipe';

import EditRecipe from './pages/recipes/EditRecipe.js';

import ShowRecipe from './pages/recipes/ShowRecipe';
import Recipes from './pages/recipes/Recipes';
// import EditProfile from './pages/profile/EditProfile';
// import Profile from './pages/profile/Profile';
import Authors from './pages/authors/Authors';
// import ShowAuthor from './pages/authors/ShowAuthor';
// import Login from './pages/auth/Login';
// import Signup from './pages/auth/Signup';

export default function Content(props) {
    // todo: add all routes
    return (
        <div className="App-content">
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/recipes/new" component={NewRecipe} />
            {/* <Route path="/recipes/:id/edit" component={EditRecipe} /> */}
            <Route path="/recipes/:id" component={ShowRecipe} />
            <Route path="/recipes" component={Recipes} />
            {/* <Route path="/profile/edit" component={EditProfile} /> */}
            {/* <Route path="/profile" component={Profile} /> */}
            {/* <Route path="/authors/:id" component={ShowAuthor} /> */}
            <Route path="/authors" component={Authors} />
            {/* <Route path="/auth/login" component={Login} /> */}
            {/* <Route path="/auth/signup" component={Signup} /> */}
        </div>
    )

}