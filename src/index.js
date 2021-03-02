import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './state'


export let rerenderTree=(state)=>{
ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={store.addPost.bind(store)} updateInputText={store.updateInputText.bind(store)}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}
rerenderTree(store.getState());

store.subscribe(rerenderTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

