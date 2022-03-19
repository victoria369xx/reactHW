import {ADD_CHAT} from './action';
import { DELETE_CHAT } from './action';
import { nanoid } from 'nanoid';

const initialState = {
    chatList: [
        {id: 'fsdfsddsf', name: 'Test'},
        {id: nanoid(), name: 'Anna'},
        {id: nanoid(), name: 'Viktor'},
        {id: nanoid(), name: 'Jack'},
        {id: nanoid(), name: 'Mary'}
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_CHAT): {
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    action.payload
                ]
            }
        }
        case(DELETE_CHAT): {
            return {
                ...state,
                chatList: state.chatList.filter(({id})=> id !== action.payload)
            
            }
        }
        default: {
            return state;
        }
    }
}