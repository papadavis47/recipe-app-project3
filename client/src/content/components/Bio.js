import React from 'react';

// PROPS: pass in a name, bio, and image
export default function Bio(props) {

    return (
         <div>
            <h2>{props.name? props.name: ""}</h2>
            <div>
                <img src={props.image? props.image : "./img/profile-placeholder.jpg"} />
            </div>
            <div>
                <p>{props.bio ? props.bio : "This user has no bio."}</p>
            </div>
         </div>   
    )
}

