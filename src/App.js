import React from 'react'
import ProfileContainer from './components/Profile/ProfileContainer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import {Route} from 'react-router-dom';

import './App.css';

function App() {

  return (
    <>
    <div className='app-wrapper'>
      <Header />
      <Navbar /> 
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={()=><ProfileContainer  />} />
        <Route path='/news' render={()=><News />} />
        <Route path='/dialogs' render={()=><DialogsContainer />} />
        <Route path='/music' render={()=><Music />} />
        <Route path='/users' render={()=><UsersContainer />} />
        <Route path='/settings' render={()=><Settings />} />
      </div>
    </div>
    </>

  );
}

export default App;
