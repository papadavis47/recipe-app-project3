import React from 'react';
import { Link } from 'react-router-dom';

// PROPS: send name, image, id, and numRecipes
export default function AuthorThumbnail(props) {
    let authorLink = `/authors/${props.id}`;
     //let image url = props.
     const authorStyle = {
        backgroundImage: 'url(' + (props.image? props.image: "./img/profile-placeholder.jpg") + ')'
    }

    // redirect to profile if the author matches to user
    if (props.user && props.id == props.user._id) {
        authorLink = '/profile';
    }
    
    return (
        <div className="auth-thumb" key={props.key}>
            <div style={authorStyle} className="auth-thumb-img" alt={props.name + "'s profile"}>
            </div>
            <div className="auth-thumb-text">
                <h3 className="author"><Link to={authorLink}>{props.name}</Link></h3>
                <p>{props.numRecipes} Recipe{(props.numRecipes === 1)?"":"s"} </p>
            </div>
        </div>
    )
}