import {ADD_CHAT} from './action';

const initialState = {
    chatList: []
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
        default: {
            return state;
        }
    }
}