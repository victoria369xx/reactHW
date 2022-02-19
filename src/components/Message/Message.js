import React from 'react';
import './Message.css'

export function Message(props) {
  return (
    <div className='msgWindow'>
      <p className='msgText'>Message: {props.text}</p>
    </div>
  );
}

