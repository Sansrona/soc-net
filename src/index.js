import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from "./state";
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {addPost, updateInputText,subscribe} from './state'


export let rerenderTree=(state)=>{
ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateInputText={updateInputText}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}
rerenderTree(state);

subscribe(rerenderTree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

