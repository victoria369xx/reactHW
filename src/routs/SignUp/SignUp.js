import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { signUpUserThunk } from "../../store/user/actions";

export default function SignUp () {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const dispatch = useDispatch(); 

    function clearForm () {
        setEmail("");
        setPassword("");
    }

    function signUpHandler (event) {
        event.preventDefault()
        dispatch(signUpUserThunk)
        clearForm()
    }

    return <div>
        <h1>SignUp page</h1>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={signUpHandler}>
            <Input type="email" placeholder="Email" size="small" style={{width:"300px"}} value={email} onChange={event => setEmail(event.target.value)}/>
            <Input type="password" placeholder="Password" size="small" style={{width:"300px"}} value={password} onChange={event => setPassword(event.target.value)}/>
            <Button type="submit" variant="contained" size="medium" style={{width:"150px"}}>Sign Up</Button>
        </form>
        <p>
            Already have an account? <br/>
            <Link to="/login">Log in</Link>
        </p>
    </div>
}