import React from 'react';
import {Link}from 'react-router-dom';
import {useSelector } from 'react-redux';
import {getUser} from '../../store/user/selectors';




export default function Profile () {
  let user = useSelector(getUser);
 
    return (
        <div>
            <h1> Profile </h1>
            <p>You are logged in as  {user.email}</p>
            <Link to="/chats">Chats</Link>
        </div>
    )
}