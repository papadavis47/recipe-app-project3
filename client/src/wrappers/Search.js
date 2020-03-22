import React, { useState } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Search(props) {
    const [error, setError] = useState(null);
    const [formInput, setFormInput] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes?tags=${formInput}`)
        .then(response => {
            if (response.data.message) {
                console.log(response.data.err);
                setError(response.data.message);
            } else {
                console.log(response.data);
                console.log(props);
                console.log(props.searchedRecipes)
                props.setSearchedRecipes(response.data);
                console.log(props);
                // console.log(" 🤖🤖🤖🤖🤖🤖");
                // console.log(response.data)
                // console.log(" 🤖🤖🤖🤖🤖🤖");
                return <Redirect to={`${process.env.REACT_APP_SERVER_URL}/recipes`} />
            }
        }).catch(err => {
            console.log(err);
          })
    }
    
    return (
        <div className="App-search">
            <h1>Recipe Seach</h1>
            <form onSubmit={handleSubmit}>
                <label>Type in keywords to discover new recipes!</label>
                <input type="text" name="search" onChange={e => setFormInput(e.target.value)} required />

                <button type="submit">Search</button>
            </form>
        </div>
    )
}
