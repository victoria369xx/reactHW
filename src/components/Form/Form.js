import React, { useRef, useEffect} from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from "react-redux";
import { createMessage } from "../../store/messages/action";
import { useParams } from "react-router-dom";


export function Form (){
    const {chatId} = useParams();
    let message = " ";
    const dispatch = useDispatch();

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });

      function clearForm () {
          message = " "
      }

    function submitHandler (event) {
            event.preventDefault();
            dispatch(createMessage(chatId, message))
            clearForm();
    }
    return (
        <Box sx={{
            mt:2,
            display: 'flex',
            justifyContent: 'center'
        }}>
        <form onSubmit={submitHandler}>
        <Input  required  inputRef={inputRef} id="outlined-required"  label="Enter your message here" size="small"  value={message} sx={{mr:1}}/>
            <Button type='submit' variant="contained" size="medium" sx={{p:1}}> <SendIcon/> </Button>
        </form>
        </Box>
    )
}

