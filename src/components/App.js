// This is where any react Hooks can be imported
import React, { useState, useEffect } from 'react'
// These are the Base components
import Header from './Header'
import Favorites from './Favorites'
import LogOut from './LogOut'
import Login from './Login'
import MainContainer from './MainContainer'
import {AppContext} from '../libs/contextLib'
// This is where styles and other things can be imported
import '../App.css';

function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const authKey = '&key=DRbPFOFZKsmVvvnOrLoC'
  const authSecret = '&secret=pdjKcOwjNpdnhiVcmuChnntCMjVmbvwH'
  fetch(`https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&per_page=3&page=1${authKey}${authSecret}`)
    .then(r => r.json())
      .then(console.log)

  return (
    <div className="App">
    <AppContext.Provider value={{isAuthenticated, userHasAuthenticated}}>
      <Header />
      <Favorites />
      <Login />
      <LogOut />
      <MainContainer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
