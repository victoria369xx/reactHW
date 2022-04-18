import React, { useEffect } from 'react'; 
import { ChatItem } from '../ChatItem/ChatItem';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getChatList } from '../../store/chats/selectors';
import {addChatAction, addChatTrackerOff, addChatTrackerOn} from '../../store/chats/action';

export function ChatList () {
    const chatList = useSelector(getChatList);
    const dispatch = useDispatch(); 

    useEffect(()=>{
      dispatch(addChatTrackerOn)
      return () => {
        dispatch(addChatTrackerOff)
      }
    }, [])

    function addChatHandler () {
  
        dispatch(addChatAction({
          name: `New_Chat`
        }))
    }

  
    return ( <div>
      <Button variant="outlined" onClick={addChatHandler}> add chat + </Button>
        <List sx={{ml:2, mt:2}}>
        {
          chatList.map((item, idx) => {return  <ChatItem item={item} key= {idx}/> 
        }) 
      }
    </List> 
    </div>
    )
}

