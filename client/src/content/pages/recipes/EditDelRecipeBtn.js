import React, { useState } from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
import EditRecipe from './EditRecipe'

export default function EditDelRecipeBtn(props) {
    let buttons = "";
    const [error, setError] = useState(null);
    const handleDelete = e => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/recipes/${props.recipe._id}`)
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

    const handleEditClick = (e) => {
        editButton = (<Route path={`/recipes/${props.recipe._id}/edit`} render={() => <EditRecipe user={props.user} recipe={props.recipe} />} />);
    }
    
    let editButton = (<button onClick={handleEditClick}>Edit Recipe</button>);

    // if there is a user, we want to check if this is their recipe.
    if (props.user) {
        if (props.authorId == props.user._id) {
            // if this is their recipe, show buttons to edit and delete recipe.
            buttons = (
                <div>
                    {/* <Link to={`/recipes/${props.recipeId}/edit`}>Edit Recipe</Link> */}
                    {/* {editButton}    */}
                    <Route path={`/recipes/${props.recipe._id}/edit`} render={() => <EditRecipe user={props.user} recipe={props.recipe} />} /> 
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