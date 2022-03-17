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
        dispatch(addChat({
          id: nanoid(),
          name: `Chat_${nanoid()}`
        }))
    }

    function deleteChatHandler (id) {
      console.log(id)
    }

    return ( <div>
        <List sx={{ml:2, mt:2}}>
        {
          chatList.map((item, id) => {return <div>
            <ChatItem item={item} key={nanoid()}/>
            <button key={nanoid()} onClick={deleteChatHandler(item.id)}> X </button>
          </div> 
        })
        } 
    </List> 
    <button onClick={addChatHandler}> add chat + </button>
    </div>
    )
}

