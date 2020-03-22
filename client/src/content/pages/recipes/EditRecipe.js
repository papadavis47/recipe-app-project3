import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default function EditRecipe(props) {
    // Declare and initialize state variables
    let [title, setTitle] = useState(props.recipe.title)
    let [alt, setAlt] = useState(props.recipe.alt)
    let [image, setImage] = useState(props.recipe.image)
    let [servings, setServings] = useState(props.recipe.servings)
    let [description, setDescription] = useState(props.recipe.description)
    let [directions, setDirections] = useState([props.recipe.directions]);
    let [ingredients, setIngredients] = useState([props.recipe.ingredients])
    let [tags, setTags] = useState([props.recipe.tags])

    useEffect()
    
    // => {
    //     setMessage("");
    // }, [name, email, password, image, bio])
    
    // redirect users who aren't logged in
    if (!props.user) {
        return <Redirect to='/' />
    }
    
    const handleSubmit = e => {
        console.log("Here is your changes:", title, alt, image, description, directions, ingredients, tags)
        console.log("Here is what you had before:", props.recipe.title, props.recipe.alt, props.recipe.image, props.recipe.descriptions, [props.recipe.directions], [props.recipe.ingredients], [props.recipe.tags])
        e.preventDefault()
        // TODO: Send the user's edited data to the server
        fetch(`${process.env.REACT_APP_SERVER_URL}/recipes/${props.recipe_id}/edit`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                alt,
                image,
                servings,
                description,
                directions,
                ingredients,
                tags
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(response => {
            if (!response.ok) {
                console.log(response);
                setMessage(`${response.status}: ${response.statusText}`);
                return;
            }

            
        })
    }


    return (
        <div>
            <h2>Edit Recipe</h2>
            <span className="red">{message}</span>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" placeholder={props.recipe.title} 
                        onChange={e => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Alt Tag:</label>
                    <input type="text" name="alt" placeholder={props.recipe.alt} 
                        onChange={e => setAlt(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="url" name="image" placeholder={props.recipe.image} 
                        onChange={e => setImage(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Servings:</label>
                    <input type="number" name="servings" placeholder={props.recipe.servings} 
                        onChange={e => setServings(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Decription:</label>
                    <input type="text" name="description" placeholder={props.recipe.description} 
                        onChange={e => setDescription(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Ingredients:</label>
                    <input type="text" name="ingredients" placeholder={props.recipe.ingredients} 
                        onChange={e => setBio(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Tags:</label>
                    <input type="text" name="tags" placeholder={props.recipe.tags} 
                        onChange={e => setTags(e.target.value)} 
                    />
                </div>
                <button type="submit">Update</button>
            </form>
      </div>
    )
}