import {CREATE_MESSAGE} from './action';

const initialState = {
    messageList: []
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(CREATE_MESSAGE): {
            return {
                ...state,
            messageList: [
                    ...state.messageList,
                    action.payload
                ]
            }
        }
        default: {
            return state;
        }
    }
}