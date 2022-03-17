import React from 'react'; 
import { ChatItem } from '../ChatItem/ChatItem';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import { getChatList } from '../../store/chats/selectors';
import {addChat} from '../../store/chats/action';
import {nanoid} from 'nanoid';

export function ChatList () {
    const chatList = useSelector(getChatList);
    const dispatch = useDispatch();

    function addChatHandler () {
      const id = nanoid();
        dispatch(addChat({
          id: id,
          name: `Chat_${id}`
        }))
    }

    return ( <div>
        <List sx={{ml:2, mt:2}}>
        {
          chatList.map((item, idx) => {return <div>
            <ChatItem item={item} key={idx}/>
            
          </div> 
        })
        } 
    </List> 
    <button onClick={addChatHandler}> add chat + </button>
    </div>
    )
}

