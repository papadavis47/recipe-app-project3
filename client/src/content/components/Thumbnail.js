import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Thumbnail(props) {
    // todo: click to expand description
    return (
        <div>
            <img src={props.recipe.image} alt={props.recipe.alt} />
            <h3>
                {props.recipe.title}
            </h3>
            <h4>
                {props.author ? "": props.recipe.userId}
            </h4>
            <p>{props.recipe.description}</p>
            <Redirect to="/recipe/{props.recipe.id}" />
        </div>
    )
}