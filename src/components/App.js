// This is where any react Hooks can be imported
import React, { useState, useEffect } from 'react'
// These are the Base components
import Header from './Header'
import Favorites from './Favorites'
import LogOut from './LogOut'
import MainContainer from './MainContainer'
// This is where styles and other things can be imported
import '../App.css';

function App() {
  const authKey = '&key=DRbPFOFZKsmVvvnOrLoC'
  const authSecret = '&secret=pdjKcOwjNpdnhiVcmuChnntCMjVmbvwH'
  fetch(`https://api.discogs.com/database/search?release_title=nevermind&artist=nirvana&per_page=3&page=1${authKey}${authSecret}`)
    .then(r => r.json())
      .then(console.log)

  return (
    <div className="App">
      <Header />
      <Favorites />
      <LogOut />
      <MainContainer />
    </div>
  );
}

export default App;
