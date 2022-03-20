import {CREATE_MESSAGE, SET_MSG_TXT} from './action';

const initialState = {
    messageList: { },
    message: {}
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(CREATE_MESSAGE): {
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

        case(SET_MSG_TXT): {
            return {
                message: {
                    author: "User",
                    text: action.payload
                }
            }
        }

        default: {
            return state;
        }
    }
}