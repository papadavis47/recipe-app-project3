import React from 'react';
import { Link } from 'react-router-dom';

// PROPS: send name, image, id, and numRecipes
export default function AuthorThumbnail(props) {
    let authorLink = `/authors/${props.id}`;
    let authorThumbStyle = {
        backgroundImage: 'url(' + (props.image? props.image: "./img/profile-placeholder.jpg")  + ')'
    }
    // redirect to profile if the author matches to user
    if (props.user && props.id == props.user._id) {
        authorLink = '/profile';
    }

    return (
        <div className="thumbnail">
            <div className="thumbnail-img" style={authorThumbStyle} alt={props.name + "'s profile"}>
            </div>
            <div className="thumbnail-text">
                <h3 className="fancy"><Link to={authorLink}>{props.name}</Link></h3>
                <p>{props.numRecipes} Recipes</p>
            </div>
        </div>
    )
}