import React from 'react';
import {useSelector} from 'react-redux';
import { getUser } from '../../store/user/selectors';



export default function Profile () {
    const user = useSelector(getUser())
  
    
    return (
        <div>
            <h1> Profile </h1>
            Logged in with {user.email}
        </div>
    )
}