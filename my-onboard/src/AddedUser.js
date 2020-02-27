import React from 'react';
import './Form.css'


function AddedUser({users}){
    return (
    <div>
        {users.map( user => (
        <div class='container2'>
            <div>Name: {user.name}</div>
            <div>email: {user.email}</div>
            <div>password: {user.password}</div>
            <div>Terms checked: {user.terms === false ? 'No' : 'Yes'}</div>
        </div>
    ))}
    </div>
    )
}

export default AddedUser;