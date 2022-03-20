import React from 'react';
import { Message } from '../Message/Message';
import {Form} from '../Form/Form';
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export function MessageList() {
  const {chatId} = useParams();
  const messageList = useSelector((state)=> state.messages.messageList[chatId]) 

  /*useEffect(()=> {
    if (messageList.length === 0) {
      return
    }

    const lastMsg = messageList[messageList.length - 1];

    if (lastMsg.author === "Bot") {
      return;
    }

    const botReply = {author: "Bot", text: "Your message has been sent"}

    setTimeout(()=>{
      dispatch(createMessage(chatId,botReply))
    }, 1000)

  }) */

  return (
    <Box sx={{ml:6}}>
        {
          messageList?.map((item, idx) => {return <Message item={item} key={idx}/>})
        }
        <Form/>
    </Box>
  );
}



