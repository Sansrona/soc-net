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
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar dialogData={props.state.dialogData} />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={()=><Profile postData={props.state.postData}/>} />
        <Route path='/news' component={News} />
      <Route path='/dialogs' render={()=><Dialogs dialogData={props.state.dialogData} messageData={props.state.messageData} />} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
