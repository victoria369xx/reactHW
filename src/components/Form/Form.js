import React, {useState, useRef, useEffect} from "react";
import propTypes  from 'prop-types';
import Box from '@mui/material/Box';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export function Form (props){
    const [text, setMsgText] = useState('');
    let [msg, setMsg] = useState({}); 
    const author = 'User';

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });

      function clearForm () {
          setMsgText(" ")
      }

    function submitHandler (event) {
            event.preventDefault();
            setMsg(msg = {author:author,text:text})
            props.onSent(msg);
            clearForm();
    }
    return (
        <Box sx={{
            mt:2,
            display: 'flex',
            justifyContent: 'center'
        }}>
        <form onSubmit={submitHandler}>
        <Input  required  inputRef={inputRef} id="outlined-required"  label="Enter your message here" size="small"  value={text} onChange={event => setMsgText(event.target.value)} sx={{mr:1}}/>
            <Button type='submit' variant="contained" size="medium" sx={{p:1}}> <SendIcon/> </Button>
        </form>
        </Box>
    )
}

Form.propTypes = {
    onSent: propTypes.func
}