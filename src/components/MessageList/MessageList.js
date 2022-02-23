import React from 'react';
import { Message } from '../Message/Message';

export function MessageList(props) {

  return (
    <div>
        {
          props.list.map((item, idx) => {return <Message item={item} key={idx}/>})
        }
        
    </div>
  );
}

