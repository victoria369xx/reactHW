import { messagesRef } from "../../firebase";

export const ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS";
export const DELETE_MESSAGE = "REMOVE_MESSAGE";
export const RESET_MESSAGES = "RESET_MESSAGES";


export const addMessageSuccess = (chatId, message) => ({
    type: "ADD_MESSAGE_SUCCESS",
    payload: {
        chatId,
        message
    }
});

export const addMessageFail = (error) => ({
    type: "ADD_MESSAGE_FAIL",
    payload: error
}); 

export const removeMessage = (id) => ({
    type: "REMOVE_MESSAGE",
    payload: id
})

export const resetMessages = () => ({
    type: "RESET_MESSAGES"
})


export const addMessageAction = (chatId, message) => (dispatch)=> {
    messagesRef.child(chatId).push(message, (error) => {
        if(error){
            dispatch(addMessageFail(error))
        }
    })
}

export const addMessageTrackerOn = (chatId) =>(dispatch) => {
    messagesRef.child(chatId).on('child_added', (snapshot) =>{
        dispatch(addMessageSuccess({
            ...snapshot.val(),
            id: snapshot.key
        }))
    })
}

export const addMessageTrackerOff = (chatId) => (dispatch) => {
    dispatch(resetMessages());
    messagesRef.child(chatId).off('child_added');
}

