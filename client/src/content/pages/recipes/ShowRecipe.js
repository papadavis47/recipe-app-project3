//need to pass user in case someone clicks favorite and add recipe id to favorites list
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import EditDelRecipeBtn from "./EditDelRecipeBtn";

export default function ShowRecipe(props) {
    // Get params from link
    const { id } = useParams();
    const [recipe, setRecipe] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)
        .then(response => {
            if (response.data.message) {
                setError(response.data.message);
                console.log(response.data.err);
            } else {
                setRecipe(response.data);
            }
        })
        .catch(err=> {
            console.log(err);
            setError(err);
        })
    }, []);

    useEffect(()=>{
        console.log("Request to api for all recipes")
    }, [recipe]);

    let recipeDetails = !recipe ? <h3>Loading...</h3> : (
        <div>
            <h2>{recipe.title}</h2>
            <h5>{recipe.description}</h5>
            <h5>{recipe.ingredients}</h5>
            <img src={recipe.image} alt={recipe.alt} />
            <EditDelRecipeBtn user={props.user} recipeId={recipe._id} authorId={recipe.userId}/>
        </div>
    )

    return (
        <div>
            <h1>Showing One Recipe (by ID)</h1>
            {recipeDetails}
        </div>
    )
}