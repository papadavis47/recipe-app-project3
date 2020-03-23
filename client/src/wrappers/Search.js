import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Search(props) {
    const [error, setError] = useState(null);
    const [formInput, setFormInput] = useState("");
    
    const handleSubmit = e => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes?tags=${formInput}`)
        .then(response => {
            if (response.data.message) {
                console.log(response.data.err);
                setError(response.data.message);
            } else {
                console.log(formInput)
                props.setSearchedRecipes(response.data);
            }
        }).catch(err => {
            console.log(err);
          })
    }
    
    return (
        <div className="App-search">
            <h1>Recipe Seach</h1>
            <form>
                <label>Type in keywords to discover new recipes!</label>
                <input type="text" name="search" onChange={e => setFormInput(e.target.value)} required />

                <button type="submit"><Link onClick={handleSubmit} to="/recipes">Search</Link></button>
            </form>
        </div>
    )
}

//put into recipes so instead of header, call search at top of recipes
//orrrr put it in content
