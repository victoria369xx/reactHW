import React from 'react';
import { Message } from '../Message/Message';
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux';
import { getMessageList } from '../../store/messages/selector';

export function MessageList() {
  const messageList = useSelector(getMessageList);

  return (
    <Box sx={{ml:6}}>
        {
          messageList.map((item, idx) => {return <Message item={item} key={idx}/>})
        }
        
    </Box>
  );
}



