import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

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
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Recipes} />
                <Route path="/recipes/new" render={() => <NewRecipe user={props.user} />} />
                {/* <Route path="/recipes/:id/edit" component={EditRecipe} /> */}
                <Route path="/recipes/:id" render={() => <ShowRecipe user={props.user} />} />
                <Route path="/recipes" render={() => <Recipes searchedRecipes={props.searchedRecipes} />} />
                <Route path="/profile/edit" render={() => <EditProfile user={props.user} />} />
                <Route path="/profile" render={() => <Profile user={props.user} />} />
                <Route path="/authors/:id" component={ShowAuthor} />
                <Route path="/authors" render={() => <Authors user={props.user} />} />
                <Route path="/auth/login" render={() => <Login user={props.user} updateUser={props.updateUser} /> } />
                <Route path="/auth/signup" render={() => <Signup user={props.user} updateUser={props.updateUser} /> } />
            </Switch>
        </div>
    )

}