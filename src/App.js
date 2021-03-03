import React from 'react'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter,Route} from 'react-router-dom';

import './App.css';




function App(props) {

  return (
    <>
    <div className='app-wrapper'>
      <Header />
      <Navbar dialogData={props.state.dialogPage.dialogData} />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={()=><Profile postPage={props.state.postPage} dispatch={props.dispatch} />} />
        <Route path='/news' component={News} />
        <Route path='/dialogs' render={()=><Dialogs dialogData={props.state.dialogPage.dialogData} messagePage={props.state.messagePage} dispatch={props.dispatch}/>} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
    </>

  );
}

export default App;
