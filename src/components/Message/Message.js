import React from 'react';
import './Message.css'

export function Message(props) {

  return (
      <div>
    <p className='authorName'> <strong>{props.item.author} :</strong></p>
    <div className='messageBody'>
    <p className='messageText'> {props.item.text}</p>
    </div>
    </div>
  );
}

