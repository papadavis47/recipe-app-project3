import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axios from "axios";
import ShowRecipe from "./ShowRecipe";


export default function Recipes(props) {
    // make 'recipes' state
    const [topTwenty, setTopTwenty] = useState([]);
    const [error, setError] = useState(null);

    // call to db to get all recipes
    useEffect(() => { 
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes`)
        .then(response => {
            if (response.data.message) {
                setError(response.data.message);
                console.log(response.data.err);
            } else {
                setTopTwenty(response.data);
            }
        }).catch(err => {
            setError(err.message);
            console.log(err)
        });
    }, []);

   
    // need to pass user and update user to hold recipeId
    let searchedRecipesLinkList = !props.searchedRecipes ?
    <h3>No more recipes. Try another search?</h3> :
    props.searchedRecipes.map((searchedRecipe, j) => (
        <div key={`recipeListItem-${j}`}>
            {/* <h4><Route path={`/recipes/${searchedRecipe._id}`} render={()=> <ShowRecipe />}>{searchedRecipe.title}</Route></h4> */}
            <h4><Link to={`/recipes/${searchedRecipe._id}`}>{searchedRecipe.title}</Link></h4>
        </div>
    ));

    let topTwentyLinkList = topTwenty.length < 1 ?
    <h3>No more recipes. You can add your own recipe below!</h3> :
    topTwenty.map((topTwenty, i) => (
        <div key={`recipeListItem-${i}`}>
            <h4><Link to={`/recipes/${topTwenty._id}`}>{topTwenty.title}</Link></h4>
        </div>
    ));

    let outputList = props.searchedRecipes ? searchedRecipesLinkList : topTwentyLinkList;

    return (
        <div>
          <h1>RECIPES STUB</h1>
          <Link to="/recipes/new">Add a recipe</Link>
          {outputList}
        </div>
      )

};
