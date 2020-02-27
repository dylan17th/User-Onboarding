import React from 'react';
import './Form.css'


function AddedUser({users}){
    return (
    <div>
        {users.map( user => (
        <div class='container'>
            <div>Name: {user.name}</div>
            <div>email: {user.email}</div>
            <div>password: {user.password}</div>
            <div>Terms checked: {user.terms === 'checked' ? 'Yes' : 'NO'}</div>
        </div>
    ))}
    </div>
    )
}

export default AddedUser;