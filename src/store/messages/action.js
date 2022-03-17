export const CREATE_MESSAGE = "CREATE_MESSAGE";

export const createMessage = (message) => ({
    type: "CREATE_MESSAGE",
    payload: message
});