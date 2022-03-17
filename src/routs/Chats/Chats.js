import React, {useEffect} from 'react';
import {ChatList} from '..//..//components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from 'react-redux';
import {getMessageList} from '../../store/messages/selector';
import {createMessage} from '../../store/messages/action';



export default function Chats ({children}) {
 const list = useSelector(getMessageList); 
 const dispatch = useDispatch(); 

  useEffect(()=> {
    if (list.length === 0) {
      return;
    }

    const lastMsg = list[list.length - 1];

    if (lastMsg.author === "Bot") {
      return;
    }

    const botReply = {author: "Bot", text: "Your message has been sent"}

    setTimeout(()=>{
      dispatch(createMessage(botReply))
    }, 1000)

  })
    return (
        <Container maxWidth="sm">
      <h1>React App</h1> 
        <Grid container sx={{
          boxShadow:1,
          borderRadius: '3px'
        }}>
            <Grid item>
              <ChatList/>
            </Grid>
            <Grid item>
            {children}
            </Grid>
        </Grid>
      </Container>
    )
}

