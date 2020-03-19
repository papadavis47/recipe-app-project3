import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Recipe(props) {
    // make 'recipes' state
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    // call to db to get all recipes
    useEffect(() => { 
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes`)
        .then(response => {
            if (response.data.message) {
                setError(response.data.message);
                console.log(response.data.err);
            } else {
                setRecipes(response.data);
            }
        }).catch(err => {
            setError(err.message);
            console.log(err)
        });
    }, []);

    let recipeLinkList = recipes.length < 1 ?
    <h3>No recipes left! Try another search?</h3> :
    recipes.map((recipe, i) => (
        <div key={`recipeListItem-${i}`}>
            <h4><Link to={`/recipe/${recipe._id}`}>{recipe.title}</Link></h4>
        </div>
    ))

    return (
        <div>
          <h1>RECIPES STUB</h1>
          <Link to="/recipes/add">Add a recipe</Link>
          {recipeLinkList}
        </div>
      )

};

//states: an array of top recipes, called in app or recipes when the component loads.
//second: an array of searched recipes
// information will probably live in app so it can go to recipes
// recipes currently on dispay, then recipes searched

// in app have an array of searched recipes, pass down the function(defined in state) that searches for recipes, calls backend, receives infor and then update state. pass to search which will call that function (as props)

//look up mongoose querying for multiple peramaters in one field