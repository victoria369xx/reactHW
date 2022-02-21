import React from 'react';
import { Message } from '../Message/Message';

export function MessageList(props) {

  return (
    <div>
        <h3> I'm message list</h3>
        {
          props.list.map((item, idx) => {return <Message item={item} key={idx}/>})
        }
        
    </div>
  );
}

