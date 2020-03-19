import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

export default function EditProfile(props) {
    // Declare and initialize state variables
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [imageURL, setImageURL] = useState('')
    let [bio, setBio] = useState('');
    let [message, setMessage] = useState('')
    
    
    useEffect(()=> {
        setEmail(props.user? 'props.user.email': '');
        setName(props.user? 'props.user.name': '');
        setPassword(props.user? 'props.user.password': '');
        setImageURL(props.user? 'props.user.imageURL': '');
        setBio(props.user? 'props.user.bio': '');
        setMessage("");
    }, [name, email, password, imageURL, bio])
    
    // redirect users who aren't logged in
    if (!props.user) {
        return <Redirect to='/' />
    }

    const handleSubmit = e => {
        e.preventDefault()
        // TODO: Send the user sign up data to the server
        fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
                imageURL,
                bio
            }),
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(response => {
            if (!response.ok) {
                console.log(response);
                setMessage(`${response.status}: ${response.statusText}`);
                return;
            }
            //if user signded up successfully
            response.json().then(result => {
                props.updateUser(result.token);
            })
        })
    }


    return (
        <div>
            <h2>Signup</h2>
            <span className="red">{message}</span>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder={props.user.name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" placeholder={props.user.email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder={props.user.password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Profile Pic URL:</label>
                    <input type="url" name="imageURL" placeholder={props.user.imageURL} onChange={e => setImageURL(e.target.value)} />
                </div>
                <div>
                    <label>Bio:</label>
                    <input type="text" name="bio" placeholder={props.user.bio} onChange={e => setBio(e.target.value)} />
                </div>
                <button type="submit">Sign Me Up!</button>
            </form>
      </div>
    )
}