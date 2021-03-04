import {
    combineReducers,
    createStore
} from 'redux';
import messageReducer from './message-reducer.js';
import dialogReducer from './dialog-reducer.js';
import postReducer from './post-reducer.js';

let reducers = combineReducers({
    messagePage:messageReducer,
    postPage: postReducer,
    dialogPage: dialogReducer
});

let store = createStore(reducers);

export default store;