import {ADD_MESSAGE_SUCCESS, RESET_MESSAGES} from './action';

const initialState = {
    messageList: {},
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_MESSAGE_SUCCESS): {
            const {chatId, message} = action.payload;
            const newMessages = {...state.messageList};

            newMessages[chatId] = [
                    message,
                ...(newMessages[chatId] || []),
              ]
            return {
                ...state,
                messageList: newMessages
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