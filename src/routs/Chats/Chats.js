import React, {useEffect, useState} from 'react';
import  {MessageList}  from '..//..//components';
import {Form} from '..//..//components';
import {ChatList} from '..//..//components';
import { nanoid } from 'nanoid';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

export const allChats = [
  {name: 'Anna', id: nanoid()},
  {name: 'Viktor', id: nanoid()},
  {name: 'Jack', id: nanoid()},
  {name: 'Mary', id: nanoid()},
];

export default function Chats ({children}) {
 const [list, setList] = useState ([]); 

  function updateList (msg) {
    const newList = [...list];
    newList.push(msg)
    setList (newList) 
  };

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
      updateList (botReply)
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
              <ChatList chats={allChats}/>
            </Grid>
            <Grid item>
              <MessageList list={list}/>
            </Grid>
            <Grid item>
            {children}
            </Grid>
        </Grid>
      <Form onSent={updateList}/>
      </Container>
    )
}

