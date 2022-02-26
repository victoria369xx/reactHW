import React, {useEffect, useState} from 'react';
import  {MessageList}  from './components';
import {Form} from './components';
import {ChatList} from './components';
import { nanoid } from 'nanoid';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'


function App() {

  const [list, setList] = useState ([]); 

  const allChats = [
    {name: 'Anna', id: nanoid()},
    {name: 'Viktor', id: nanoid()},
    {name: 'Jack', id: nanoid()},
    {name: 'Mary', id: nanoid()},
];

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
            <Grid item xs={4}>
              <ChatList chats={allChats}/>
            </Grid>
            <Grid item xs={6}>
              <MessageList list={list}/>
            </Grid>
        </Grid>
      <Form onSent={updateList}/>
      </Container>
  );
}

export default App;
