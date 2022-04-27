import {CREATE_MESSAGE} from './action';

const initialState = {
    messageList: { },
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


        default: {
            return state;
        }
    }
}