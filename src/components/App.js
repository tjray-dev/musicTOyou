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
  const [searchResults, setSearchResults ] = useState([])

  useEffect(() => {
    const authKey    = '&key=DRbPFOFZKsmVvvnOrLoC'
    const authSecret = '&secret=pdjKcOwjNpdnhiVcmuChnntCMjVmbvwH'
    const baseURL    = 'https://api.discogs.com/database/search?'
  
    fetch(`${baseURL}artist=tool${authKey}${authSecret}`)
      .then(r => r.json())
        .then(data => setSearchResults(data.results) )
  }, [])
  console.log(searchResults)
  return (
    <div className="App">
      <Header />
      <Favorites />
      <LogOut />
      <MainContainer searchResults={ searchResults } />
    </div>
  );
}

export default App;
