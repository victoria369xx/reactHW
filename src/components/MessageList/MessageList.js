import React from 'react';
//import { Message } from '../Message/Message';
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux';
import { getMessageList } from '../../store/messages/selector';
import { useParams } from 'react-router-dom';


export function MessageList() {
  const {chatId} = useParams();
  const messageList = useSelector(getMessageList); 
  const keys = Object.keys(messageList); 
  ///const messages = keys.find(chatId);
  
  return (
    <Box sx={{ml:6}}>
        hi i'm message list <br/> of user {chatId} 
         Keys: {keys}
    </Box>
  );
}

// messageList.map((item, idx) => {return <Message item={item} key={idx}/>})

