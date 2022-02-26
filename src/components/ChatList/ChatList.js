import React from 'react'; 
import propTypes  from 'prop-types';
import { ChatItem } from '../ChatItem/ChatItem';
import List from '@mui/material/List'

export function ChatList (props) {
    return (
        <List sx={{ml:2, mt:2}}>
        {
          props.chats.map((item, id) => {return <ChatItem item={item} key={id}/>})
        }
        
    </List>
        
    )
}

ChatList.propTypes = {
    chats: propTypes.array
}