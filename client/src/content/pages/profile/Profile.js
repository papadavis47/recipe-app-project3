import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Thumbnail from '../../components/Thumbnail';
import Bio from '../../components/Bio';
import axios from 'axios';


export default function Profile(props) {
    let [userRecipes, setUserRecipes] = useState([]); 
    let [userFaves, setUserFaves] = useState([]);
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
                    setUserRecipes(response.data.userRecipes);
                    setUserFaves(response.data.favRecipes);
                }
            }).catch(err => {
                setError(err);
                console.log(err);
            });
        }
    }, []);

    if (!props.user) {
        return <Redirect to='/' />
    }

    console.log("the user is 😎", props.user)

    let recipeLinkList = (<p className="dark-bg">You haven't posted any recipes yet</p>);
    if (userRecipes && userRecipes.length > 0) {
        recipeLinkList = userRecipes.map(recipe => {
            return (
                <Thumbnail recipe={recipe} isAuthor={true} />
            )  
        });
    }  

    let favesLinkList = (<p className="dark-bg">No Favorites to show</p>);
    if (userFaves && userFaves.length > 0) {
        favesLinkList = userFaves.map(recipe => {
            console.log(recipe)
            return (
                <Thumbnail recipe={recipe} />
            )  
        });
    }

    return (
        <div className="content">
            <div>
                <Bio name={props.user? props.user.name: ""} 
                    bio={props.user? props.user.bio: ""} 
                    image={props.user? props.user.image: ""} />
                <Link to="/profile/edit" className="App-link white-bg">Edit Profile</Link>
            </div>
            <div> 
                <h3 className="white-bg">My Favorites</h3>
                {favesLinkList}
            </div>
            <div>
                <h3 className="white-bg">My Recipes</h3>
                {recipeLinkList}
            </div>
        </div>
    )
}