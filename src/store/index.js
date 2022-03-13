import {createStore, combineReducers} from 'redux';
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';

export const store = createStore(combineReducers({
    profile: profileReducer,
    chats: chatsReducer
}), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());