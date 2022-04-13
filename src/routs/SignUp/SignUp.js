import React from "react";
import {Link} from "react-router-dom";
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUp () {
    return <div>
        <h1>SignUp page</h1>
        <form style={{display:"flex", flexDirection:"column"}}>
            <Input type="email" placeholder="Email" size="small" style={{width:"300px"}}/>
            <Input type="password" placeholder="Password" size="small" style={{width:"300px"}}/>
            <Button type="submit" variant="contained" size="medium" style={{width:"150px"}}>Sign Up</Button>
        </form>
        <p>
            Already have an account? <br/>
            <Link to="/login">Log in</Link>
        </p>
    </div>
}