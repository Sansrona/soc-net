import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {addPost, updateInputText} from './state'


export let rerenderTree=(state)=>{
ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateInputText={updateInputText}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}