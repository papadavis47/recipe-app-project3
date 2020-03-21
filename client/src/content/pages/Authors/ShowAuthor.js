import React from 'react';
import Thumbnail from '../../components/Thumbnail';
import Bio from '../../components/Bio';

//PROPS: pass in author object and array of recipe objects as recipes
export default function ShowAuthor(props) {
    let authorRecipes = [];
    if (props.recipes) {
        authorRecipes = props.recipes.map(recipe => {
            return (
                <Thumbnail recipe={recipe} />
            )  
        })
    } else {
        authorRecipes = (
            <p>No recipes to show</p>
        )
    }

    return (
        <div>
            <div>
                <Bio name={props.author.name} bio={props.author.bio} image={props.author.image} />
            </div>
            <div> 
                {authorRecipes}
            </div>
        </div>
    )
}