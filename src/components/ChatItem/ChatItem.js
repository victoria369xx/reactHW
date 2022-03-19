import React from 'react'; 
import propTypes from 'prop-types';
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';


export function ChatItem (props) {

    return (
        
            <ListItem sx={{ borderBottom: 1, borderBottomColor: '#ccc'}} component={Link} to={`/chats/${props.item.id}`}>
                <Avatar sx={{mr:2}}><PersonIcon/></Avatar>
                 {props.item.name}</ListItem>
       
    )
}

ChatItem.propTypes = {
    item: propTypes.object,
}