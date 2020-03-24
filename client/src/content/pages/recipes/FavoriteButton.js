import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FavoriteButton(props) {
    let [favorite, setFavorite] = useState("");
    let [error, setError] = useState(null);

    // useEffect(() => {
    //     if (props.user) {
    //         axios.get(`${process.env.REACT_APP_SERVER_URL}/authors/${props.user._id}`)
    //         .then(response => {
    //             console.log("💩💩")
    //             if (response.data.message) {
    //                 setError(response.data.message);
    //                 console.log("💥", response.data.err);
    //             } else {
    //                 console.log("response.data:", response.data)
    //                 setFavorite(props.recipeId);
    //                 response.data.favRecipes.forEach(recipe => {
    //                     console.log("🤠")
    //                     console.log(recipe._id)
    //                     // console.log(recipe)
    //                     console.log("😈")
    //                     console.log(props.recipeId)
    //                     // console.log(props)
    //                     if (recipe._id === props.recipeId) {
    //                         setFavorite("");
    //                     }
    //                 })
    //             }
    //         }).catch(err => {
    //             setError(err);
    //             console.log(err);
    //         })
    //     }
    // }, []);

    useEffect(() => {
        let checkFave = props.user.favRecipes.find(recipe => recipe === props.recipeId)
        console.log(checkFave + "👾")
        setFavorite(checkFave ? true : false);
    })

    let handleSubmit = () => {
        console.log("😿")
        axios.post(`${process.env.REACT_APP_SERVER_URL}/profile/addFav`, {
            recipeId: props.recipeId,
            userId: props.user._id
        })
        .then(response => {
            setFavorite(props.recipeId);
            <p>Added to favorites!</p>
        }).catch(err => {
            console.log("🎃")
            console.log(err);
        })
    }

    // let favoriteButton = !favorite ? <button onClick={handleSubmit}>Add to Favorites</button> : <p>Recipe in Favorites!</p>;
    return (
        !favorite ? <button onClick={handleSubmit}>Add to Favorites</button> : <p>Recipe in Favorites!</p>
        //!favorite ? 
    )
}

