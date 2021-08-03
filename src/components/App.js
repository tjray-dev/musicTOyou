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

  return (
    <div className="App">
      <Header onSearch={ setSearchResults } />
      <Favorites />
      <LogOut />
      <MainContainer searchResults={ searchResults } />
    </div>
  );
}

export default App;
