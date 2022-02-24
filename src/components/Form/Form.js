import React, {useState} from "react";
import Button from '@mui/material/Button'
import TextField from "@mui/material/TextField";

export function Form (props){
    const [text, setMsgText] = useState('');
    const [author, setMsgAuthor] = useState('');
    let [msg, setMsg] = useState({});

    function submitHandler (event) {
            event.preventDefault();
            setMsg(msg = {author:author,text:text})
            props.onSent(msg)
    }
    return (
        <form onSubmit={submitHandler} className="form">
            <TextField sx={{mr:1}} required size="small" id="outlined-required" label="Author"  defaultValue={author} onChange={event => setMsgAuthor(event.target.value)}/>
            <TextField sx={{mr:1}} required size="small" id="outlined-required" label="Text"  defaultValue={text} onChange={event => setMsgText(event.target.value)}/>
            <Button sx={{p:1}} variant="outlined" size="small" type='submit' className="submitBtn"> Send </Button>
        </form>
    )
}