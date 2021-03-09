import {
    combineReducers,
    createStore
} from 'redux';
import messageReducer from './message-reducer.js';
import dialogReducer from './dialog-reducer.js';
import postReducer from './post-reducer.js';
import usersReducer from './users-reducer.js'

let reducers = combineReducers({
    messagePage:messageReducer,
    postPage: postReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;
export default store;