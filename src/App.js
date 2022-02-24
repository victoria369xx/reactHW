import React, {useEffect, useState} from 'react';
import  {MessageList}  from './components';
import {Form} from './components'
import Container from '@mui/material/Container'
import {ChatList} from './components'
import Box from '@mui/material/Box'

function App() {

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
      <h2 className='heading'>React App</h2>
      <Box sx={{ display: 'flex',
                 justifyContent: 'space-between',
                 alignSelf:'center' }}>
        <ChatList/>
     <MessageList list={list}/> 
     </Box>
      <Form onSent={updateList}/>
    </Container>
  );
}

export default App;
