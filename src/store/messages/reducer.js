import {ADD_MESSAGE_SUCCESS, RESET_MESSAGES} from './action';

const initialState = {
    messageList: {},
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_MESSAGE_SUCCESS): {
            const {chatId, message} = action.payload;
            return {
            messageList: {
                    ...state.messageList,
                    [chatId] : [
                        ...(state.messageList[chatId] || []),
                        message
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