import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function EditDelRecipeBtn(props) {
    let buttons = "";
    const [error, setError] = useState(null);

    const handleDelete = e => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/recipes/${props.recipeId}`)
        .then(response => {
            if (response.data.message) {
                console.log("💥", response.data.err);
            } else {
                // if successfully deleted, redirect to /recipes
            }
        }).catch(err => {
            setError(err);
            console.log(err);
        });
    }

    // if there is a user, we want to check if this is their recipe.
    if (props.user) {
        if (props.authorId == props.user._id) {
            // if this is their recipe, show buttons to edit and delete recipe.
            buttons = (
                <div>
                    <Link to="/recipes/edit">Edit Recipe</Link>
                    <button onClick={handleDelete}>Delete Recipe</button>
                </div>
            );
        }
    }
    
    return (
        <div>
            {buttons}
        </div>
    )
}