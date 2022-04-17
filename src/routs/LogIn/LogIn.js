import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { logInUserThunk } from "../../store/user/actions";



export default function LogIn () {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const dispatch = useDispatch(); 

    function emailSubmitHandler (event) {
        setEmail(event.target.value)
    }

    function passwordSubmitHandler (event) {
        setPassword(event.target.value)
    }


    function clearForm () {
        setEmail("");
        setPassword("");
    }

    function logInHandler (event) {
        event.preventDefault()
        dispatch(logInUserThunk(email,password))
        clearForm()
    }

    return <div>
        <h1>Login page</h1>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={logInHandler}>
            <Input type="email" placeholder="Email" size="small" style={{width:"300px"}} value={email} onChange={emailSubmitHandler}/>
            <Input type="password" placeholder="Password" size="small" style={{width:"300px"}} value={password} onChange={passwordSubmitHandler}/>
            <Button type="submit" variant="contained" size="medium" style={{width:"150px"}}>Log in</Button>
        </form>

        <p>
            Don't have an account? <br/>
            <Link to="/signup">Register</Link>
        </p>
    </div>
}