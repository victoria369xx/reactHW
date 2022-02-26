import React from 'react';
import propTypes  from 'prop-types';
import { Message } from '../Message/Message';
import Box from '@mui/material/Box'

export function MessageList(props) {

  return (
    <Box sx={{ml:6}}>
        {
          props.list.map((item, idx) => {return <Message item={item} key={idx}/>})
        }
        
    </Box>
  );
}

MessageList.propTypes = {
  list: propTypes.array.isRequired
}

