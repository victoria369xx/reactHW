import React from 'react';
import { useParams } from 'react-router-dom'

export default function Chat () {
    const {chatId} = useParams() 

    return (
        <div>
            <h3> Chat</h3>
            <p>User with id <strong>{chatId}</strong></p>
        </div>
        
    )
}