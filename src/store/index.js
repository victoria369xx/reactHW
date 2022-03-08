import {createStore} from 'redux';
import { profileReducer } from './profile/reducer';

export const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());