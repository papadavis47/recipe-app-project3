import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FavoriteButton(props) {
    let [favorite, setFavorite] = useState("");
    let [error, setError] = useState(null);

    useEffect(() => {
        if (props.user) {
            axios.get(`${process.env.REACT_APP_SERVER_URL}/authors/${props.user._id}`)
            .then(response => {
                if (response.data.message) {
                    setError(response.data.message);
                    console.log("💥", response.data.err);
                } else {
                    console.log("response.data:", response.data)
                    if (response.data.favRecipes.includes(props.recipeId)) {
                        setFavorite(props.recipeId);
                    }
                }
            }).catch(err => {
                setError(err);
                console.log(err);
            })
        }
    }, []);

    let handleSubmit = () => {
        console.log("😿")
        axios.post(`${process.env.REACT_APP_SERVER_URL}/profile/addFav`, {
            recipeId: props.recipeId,
            userId: props.user._id
        })
        .then(response => {
            console.log("👾")
            console.log(response);
            setFavorite(props.recipeId);
        }).catch(err => {
            console.log("🎃")
            console.log(err);
        })
    }

    // let favoriteButton = !favorite ? <button onClick={handleSubmit}>Add to Favorites</button> : <p>Recipe in Favorites!</p>;

    return !favorite ? <button onClick={handleSubmit}>Add to Favorites</button> : <p>Recipe in Favorites!</p>;
}

