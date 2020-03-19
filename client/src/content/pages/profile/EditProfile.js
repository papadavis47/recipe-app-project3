import React from 'react';
import { Redirect } from 'react-router-dom';

export default function EditProfile(props) {
    if (!props.user) {
        return <Redirect to='/' />
    }
    let form = "";


    return (
        <div>
            {form}
        </div>
    )
}