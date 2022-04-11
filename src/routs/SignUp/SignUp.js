import React from "react";
import {Link} from "react-router-dom";

export default function SignUp () {
    return <div>
        <h1>SignUp page</h1>
        <form>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Create account</button>
        </form>
        <p>
            Already have an account? <br/>
            <Link to="/login">Log in</Link>
        </p>
    </div>
}