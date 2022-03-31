import React from "react";
import Button from '@mui/material/Button'
import { useDispatch } from "react-redux";
import { getShibaThunk } from "../../store/shiba/actions";


export default function Shiba () {
    const dispatch = useDispatch();


    function requestHandler () {
        console.log(dispatch(getShibaThunk()))
        
    }

    return (
        <div>
            <h1>Hi, I'm a page about Shiba Inu dogs ❤️</h1>
            <p>You can press the button below and see some good boy 🐱 ️</p>
            <Button variant="outlined" color="warning" onClick={requestHandler}> Try it</Button>

            <div style={{marginTop:"40px"}}>
                
            </div>
        </div>
    )
}