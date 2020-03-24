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
            }
        }).catch(err => {
            setError(err);
            console.log(err);
        });
    }, []);

    let key = 0;

    let authorLinkList = authors.map(author => {
        key++;
        return <AuthorThumbnail name={author.name} 
                image={author.image} 
                numRecipes={author.userRecipes.length}
                id={author._id}
                user={props.user}
                key={key}
            />
    });

    return (
        <div>
            <h2 className="white-bg fancy">Authors</h2>
            <div className="content">
                {authorLinkList}
            </div>
        </div>
    )
}