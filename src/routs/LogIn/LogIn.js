import React from "react";
import {Link} from 'react-router-dom';

export default function LogIn () {
    return <div>
        <h1>Login page</h1>
        <form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Log In</button>
        </form>

        <p>
            Don't have an account? <br/>
            <Link to="/signup">Register</Link>
        </p>
    </div>
}