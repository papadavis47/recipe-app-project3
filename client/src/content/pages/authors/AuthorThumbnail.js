import React from 'react';
import { Link } from 'react-router-dom';

// PROPS: send name, image, id, and numRecipes
export default function AuthorThumbnail(props) {
    let authorLink = `/authors/${props.id}`;

    // redirect to profile if the author matches to user
    if (props.user && props.id == props.user._id) {
        authorLink = '/profile';
    }

    return (
        <div>
            <img src={props.image? props.image: "./img/profile-placeholder.jpg"} alt={props.name + "'s profile"} />
            <h3><Link to={authorLink}>{props.name}</Link></h3>
            <p>{props.numRecipes} Recipes</p>
        </div>
    )
}