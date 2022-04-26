import { chatsRef} from "../../firebase";

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const SET_MSG_TXT = "SET_MSG_TXT";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const createMessage = (chatId, message) => ({
    type: "CREATE_MESSAGE",
    payload: {
        chatId,
        message
    }
});

export const createMessageFail = (error) => ({
    type: "CREATE_MESSAGE_FAIL",
    payload: error
}); 

export const deleteMessage = (id) => ({
    type: "DELETE_MESSAGE",
    payload: id
})


export const createMessageAction = (chatId, message) => (dispatch)=> {
    chatsRef.child(chatId).push(message, (error) => {
        if(error){
            dispatch(createMessageFail(error))
        }
    })
}

export const createMessageTrackerOn = (chatId) =>(dispatch) => {
    chatsRef.child(chatId).on('child_added', (snapshot) =>{
        dispatch(createMessage({
            ...snapshot.val(),
            id: snapshot.key
        }))
    })
}

export const createMessageTrackerOff = (chatId) => () => {
    chatsRef.child(chatId).off('child_added');
}


export const setMsgTxt = (text) => ({
    type: "SET_MSG_TXT",
    payload: text
})
