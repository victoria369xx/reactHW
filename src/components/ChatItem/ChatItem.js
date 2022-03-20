import React from 'react'; 
import propTypes from 'prop-types';
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {deleteChat} from '../../store/chats/action';


export function ChatItem (props) {
    const dispatch = useDispatch(); 

    const deleteChatHandler = (id) => () => { 
        dispatch(deleteChat({id}))
    }
    
   
    return (
            <div> 
                 <ListItem sx={{ borderBottom: 1, borderBottomColor: '#ccc'}} component={Link} to={`/chats/${props.item.id}`}>
                <Avatar sx={{mr:2}}><PersonIcon/></Avatar>
                 {props.item.name}</ListItem>
                 <button onClick={deleteChatHandler(props.item.id)}> X </button>
            </div>
            
            
    )
}

ChatItem.propTypes = {
    item: propTypes.object,
}