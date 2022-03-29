export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const SET_MSG_TXT = "SET_MSG_TXT";

export const createMessage = (chatId, message) => ({
    type: "CREATE_MESSAGE",
    payload: {
        chatId,
        message
    }
});


export const createMessageThunk = (chatId, message) => (dispatch) => {
    const botReply = {author: "Bot", text: "Your message has been sent"}

    if(message.author === "User") {
        setTimeout(()=>{
          dispatch(createMessage(chatId,botReply))
        }, 1000)
    }

    dispatch(createMessage(chatId, message))
}

export const setMsgTxt = (text) => ({
    type: "SET_MSG_TXT",
    payload: text
})
