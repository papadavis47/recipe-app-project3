import React from 'react';

// PROPS: pass in a name, bio, and image
export default function Bio(props) {
    const bioStyle = {
        backgroundImage: 'url(' + (props.image? props.image: "./img/profile-placeholder.jpg")  + ')'
    }
    return (
         <div className="bio">
            <div style={bioStyle} className="bio-img">
            </div>
            <div className="bio-text">
                <h2 className="fancy">{props.name? props.name: ""}</h2>
                <p>{props.bio ? props.bio : "This user has no bio."}</p>
            </div>
         </div>   
    )
}

