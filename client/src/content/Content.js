import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// import all the pages
// import Home from './pages/Home';
import NewRecipe from './pages/recipes/NewRecipe';
import Recipes from './pages/recipes/Recipes';
import EditRecipe from './pages/recipes/EditRecipe.js';
import ShowRecipe from './pages/recipes/ShowRecipe';
import EditProfile from './pages/profile/EditProfile';
import Profile from './pages/profile/Profile';
// import Authors from './pages/authors/Authors';
//import ShowAuthor from './pages/authors/ShowAuthor';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

export default function Content(props) {
    
    return (
        <div className="App-content">
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/recipes/new" component={NewRecipe} />
            {/* <Route path="/recipes/:id/edit" component={EditRecipe} /> */}
            <Route path="/recipes/:id" component={ShowRecipe} />
            <Route path="/recipes" render={() => <Recipes searchedRecipes={props.searchedRecipes} />} />
            <Route path="/profile/edit" render={() => <EditProfile user={props.user} />} />
            <Route path="/profile" render={() => <Profile user={props.user} />} />
            {/* <Route path="/authors/:id" component={ShowAuthor} />
            <Route path="/authors" component={Authors} /> */}
            <Route path="/auth/login" render={() => <Login user={props.user} updateUser={props.updateUser} /> } />
            <Route path="/auth/signup" render={() => <Signup user={props.user} updateUser={props.updateUser} /> } />
        </div>
    )

}