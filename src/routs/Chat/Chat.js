import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { allChats } from '../Chats/Chats';

export default function Chat () {
    const {chatId} = useParams();
    if (!allChats.find(({id})=> id === chatId)) {
        return <Redirect to="/chats"/>
    }

    return (
        <div>
            <h3> Chat</h3>
            <p>User with id <strong>{chatId}</strong></p>
        </div>
        
    )
}