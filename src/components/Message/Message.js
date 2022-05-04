import React from 'react';
import propTypes  from 'prop-types';
import Box from '@mui/material/Box'


export function Message(props) {
  
  return (
      <Box sx={{
        mb:2
      }}>
    <Box sx={{
      boxShadow:1,
      borderRadius: '3px',
      padding: 1
    }}> {props.item}</Box>
    </Box>
  );
}

Message.propTypes = {
  item: propTypes.string
}