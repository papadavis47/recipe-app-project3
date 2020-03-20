import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

export default function EditProfile(props) {
    // Declare and initialize state variables
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [image, setImage] = useState('')
    let [bio, setBio] = useState('');
    let [message, setMessage] = useState('')
    
    
    useEffect(()=> {
        setMessage("");
    }, [name, email, password, image, bio])
    
    // redirect users who aren't logged in
    if (!props.user) {
        return <Redirect to='/' />
    }
    
    const handleSubmit = e => {
        // console.log("🦕 here be your changes:", name, email, password, image, bio)
        // console.log("heres what you had before:", props.user.email, props.user.name, props.user.image, props.user.bio)
        e.preventDefault()
        // TODO: Send the user's edited data to the server
        fetch(`${process.env.REACT_APP_SERVER_URL}/profile/edit`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
                image,
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
            <h2>Edit Profile</h2>
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
                    <input type="url" name="image" placeholder={props.user.image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                    <label>Bio:</label>
                    <input type="text" name="bio" placeholder={props.user.bio} onChange={e => setBio(e.target.value)} />
                </div>
                <button type="submit">Update</button>
            </form>
      </div>
    )
}