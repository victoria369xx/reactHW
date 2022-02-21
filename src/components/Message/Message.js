import React from 'react';

export function Message(props) {
  
  return (
      <div>
    <p> <strong>{props.item.author}</strong></p>
    <p> {props.item.text}</p>
    </div>
  );
}