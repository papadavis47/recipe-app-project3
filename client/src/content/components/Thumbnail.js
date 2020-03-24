import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// PROPS: pass in a recipe object with all the associated values
export default function Thumbnail(props) {
    
    // const [author, setAuthor]= useState('');
    let [error, setError] = useState(null);
    const thumbStyle = {
        backgroundImage: 'url(' + props.recipe.image + ')'
    }

    // useEffect(() => {
    //     // get the recipes userID's user
    //     console.log(props.recipe.userId)
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}/authors/${props.recipe.userId}`)
    //     .then(response => {
    //         if (response.data.message) {
    //             setError(response.data.message);
    //             console.log("💥", response.data.err);
    //         } else {
    //             setAuthor(response.data);
    //         }
    //     }).catch(err => {
    //         setError(err);
    //         console.log(err);
    //     });
    // }, []);

    //just populate user on the back end

    let authorLink = (<Link to={`/authors/${props.recipe.userId._id}`}>{props.recipe.userId.name}</Link>);

    // todo: click to expand description
    return (

        <div className="thumbnail">
            <div style={thumbStyle} class="thumbnail-img" alt={props.recipe.alt}>
            </div>
            <div className="thumbnail-text">
                <h3 className="fancy">
                    <Link to={`/recipes/${props.recipe._id}`}>{props.recipe.title}</Link>
                </h3>
                <h4 className="author">
                    {authorLink}
                </h4>
                <p>{props.recipe.description}</p>
          </div>
        </div>
    )
}