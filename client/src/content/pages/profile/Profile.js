import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Profile(props) {
    if (!props.user) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <h2>{props.user.name}'s sweet profile page</h2>
        </div>
    )
}