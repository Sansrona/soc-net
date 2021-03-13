import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';
import messageReducer from './message-reducer.js';
import dialogReducer from './dialog-reducer.js';
import postReducer from './post-reducer.js';
import usersReducer from './users-reducer.js'
import authReducer from './auth-reducer.js'
import thunk from 'redux-thunk';

let reducers = combineReducers({
    messagePage:messageReducer,
    postPage: postReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;