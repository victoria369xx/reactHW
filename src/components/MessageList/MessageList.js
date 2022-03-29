import React from 'react';
import { Message } from '../Message/Message';
import {Form} from '../Form/Form';
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export function MessageList() {
  const {chatId} = useParams();
  const messageList = useSelector((state)=> state.messages.messageList[chatId]) 

  return (
    <Box sx={{ml:6}}>
        {
          messageList?.map((item, idx) => {return <Message item={item} key={idx}/>})
        }
        <Form/>
    </Box>
  );
}



