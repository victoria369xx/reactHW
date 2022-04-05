import React from 'react';
import {Link} from 'react-router-dom';


export default function Home () {
    return (
       <div> 
        <h1> React Chat App </h1> 
        <Link to="/signUp">Sign Up</Link>
        <Link to="/logIn">Log In</Link>
        </div>
    )
}