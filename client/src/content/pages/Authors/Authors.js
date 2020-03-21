import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorThumbnail from './AuthorThumbnail';

export default function Authors(props) {
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState(null);

    // call backend to get authors
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/authors`)
        .then(response => {
            if (response.data.message) {
                setError(response.data.message);
                console.log(response.data.err);
            } else {
                setAuthors(response.data.filter(author => {
                    return author.userRecipes.length > 0;
                }));
                console.log("🐋My bois:", authors)
            }
        }).catch(err => {
            setError(err);
            console.log(err);
        });
    }, []);

    let authorLinkList = authors.map(author => {
        return <AuthorThumbnail name={author.name} 
                image={author.image} 
                numRecipes={author.userRecipes.length}
                id={author._id}
            />
    });

    return (
        <div>
            <h2>Authors</h2>
            {authorLinkList}
        </div>
    )
}