import {ADD_MESSAGE_SUCCESS, RESET_MESSAGES} from './action';

const initialState = {
    messageList: {},
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
       case(ADD_MESSAGE_SUCCESS): {
        const copyMsgs = {...state.messageList};

        copyMsgs[action.payload.chatId] = [
          action.payload.message,
          ...(copyMsgs[action.payload.chatId] || []),
        ]
  
        return {
          ...state,
          messageList: copyMsgs
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