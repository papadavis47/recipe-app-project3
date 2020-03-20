import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Thumbnail from '../../components/Thumbnail';

export default function Profile(props) {
    if (!props.user) {
        return <Redirect to='/' />
    }

    console.log("the user is 😎", props.user)
    let imgLink = props.user.image? props.user.image : "../../../src/img/profile-placeholder.jpg";

    let faves = [];
    if (props.user.faveRecipe) {
        faves = props.user.faveRecipe.map(recipe => {
            return (
                <Thumbnail recipe={recipe} />
            )
        })
    }

    let myRecipes = [];
    if (props.user.userRecipe) {
        myRecipes = props.user.userRecipe.map(recipe => {
            return (
                <Thumbnail recipe={recipe} author={true} />
            )  
        })
    } 

    return (
        <div>
            <h2>{props.user.name}'s sweet profile page</h2>
            <div>
                <img src={imgLink} />
            </div>
            <div>
                <p>{props.user.bio ? props.user.bio : "This user has no bio."}</p>
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