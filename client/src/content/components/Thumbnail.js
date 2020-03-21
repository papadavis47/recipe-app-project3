import React from 'react';
import { Link } from 'react-router-dom';

// PROPS: pass in a recipe object with all the associated values
export default function Thumbnail(props) {
    // todo: click to expand description
    return (
        <div>
            <img src={props.recipe.image} alt={props.recipe.alt} />
            <h3>
                <Link to={`/recipe/${props.recipe.id}`}>{props.recipe.title}</Link>
            </h3>
            <h4>
                {props.author ? "": props.recipe.userId}
            </h4>
            <p>{props.recipe.description}</p>
        </div>
    )
}