import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Thumbnail from '../../components/Thumbnail';
import Bio from '../../components/Bio';

export default function Profile(props) {
    if (!props.user) {
        return <Redirect to='/' />
    }

    console.log("the user is 😎", props.user)

    let faves = [];
    if (props.user.faveRecipes) {
        faves = props.user.faveRecipes.map(recipe => {
            return (
                <Thumbnail recipe={recipe} />
            )
        })
    }

    let myRecipes = props.user.userRecipes?
        props.user.userRecipes.map(recipe => {
            return (
                <Thumbnail recipe={recipe} author={true} />
            )  
        })
        : <p>No recipes to show</p>


    return (
        <div>
            <div>
                <Bio name={props.user.name} bio={props.user.bio} image={props.user.image} />
                <Link to="/profile/edit" className="App-link">Edit Profile</Link>
            </div>
            <div> 
                {faves}
            </div>
            <div>
                {myRecipes}
            </div>
        </div>
    )
}