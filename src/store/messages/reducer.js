import {ADD_MESSAGE_SUCCESS, RESET_MESSAGES} from './action';

const initialState = {
    messageList: {},
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_MESSAGE_SUCCESS): {
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [
                        ...(state.messageList[action.payload.chatId] || []),
                        action.payload.message
                    ]
                }
            }
        }

        case(RESET_MESSAGES): {
            return initialState
        }


        default: {
            return state;
        }
    }
}