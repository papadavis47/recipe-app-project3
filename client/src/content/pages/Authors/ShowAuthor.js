import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Thumbnail from '../../components/Thumbnail';
import Bio from '../../components/Bio';

//PROPS: pass in author object and array of recipe objects as recipes
export default function ShowAuthor(props) {
    let [author, setAuthor] = useState('');
    let [authorRecipes, setAuthorRecipes] = useState([]); 
    let [error, setError] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/authors/${id}`)
        .then(response => {
            if (response.data.message) {
                setError(response.data.message);
                console.log("💥", response.data.err);
            } else {
                // console.log("response.data:", response.data)
                setAuthor(response.data);
                setAuthorRecipes(response.data.userRecipes);
            }
        }).catch(err => {
            setError(err);
            console.log(err);
        });
    }, []);

    let recipeLinkList = authorRecipes.map(recipe => {
        return (
            <Thumbnail recipe={recipe} isAuthor={true} />
        )  
    });

    return (
        <div>
            <div>
                <Bio name={author.name} bio={author.bio} image={author.image} />
            </div>
            <div> 
                {recipeLinkList}
            </div>
        </div>
    )
}