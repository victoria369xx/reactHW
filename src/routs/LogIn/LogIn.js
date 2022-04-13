import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { logInUser } from "../../store/user/actions";



export default function LogIn () {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const dispatch = useDispatch(); 

    function clearForm () {
        setEmail("");
        setPassword("");
    }

    function logInHandler (event) {
        event.preventDefault()
        let user = {
            email: email,
            password: password
        }

        dispatch(logInUser(user))
        clearForm()
    }

    return <div>
        <h1>Login page</h1>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={logInHandler}>
            <Input type="email" placeholder="Email" value={email} size="small" style={{width:"300px"}} onChange={event => setEmail(event.target.value)}/>
            <Input type="password" placeholder="Password" value={password} size="small" style={{width:"300px"}} onChange={event => setPassword(event.target.value)}/>
            <Button type="submit" variant="contained" size="medium" style={{width:"150px"}}>Log In</Button>
        </form>

        <p>
            Don't have an account? <br/>
            <Link to="/signup">Register</Link>
        </p>
    </div>
}