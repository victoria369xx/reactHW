export const getChat = (state) => state.chat;

export const getChatList = (state) => getChat(state)?.chatList;