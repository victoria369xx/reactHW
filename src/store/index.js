import {createStore, combineReducers} from 'redux';
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messageReducer } from './messages/reducer';

export const store = createStore(combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messageReducer
}), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());