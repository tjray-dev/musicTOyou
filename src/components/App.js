// This is where any react Hooks can be imported
import React, { useState } from 'react'
// These are the Base components
import Header from './Header'
import Favorites from './Favorites'
import LogOut from './LogOut'
// import Login from './Login'
import MainContainer from './MainContainer'
import {AppContext} from '../libs/contextLib'
// This is where styles and other things can be imported
import '../App.css';

function App() {
  const [ searchResults, setSearchResults ] = useState([])
  const [ currentPage,   setCurrentPage ]   = useState(1)
  const [ itemsPerPage,  setItemsPerPage ]  = useState(20)
  // State for the favorites page
  // These will need to be passed down to the card 
  // const [ favArtists, setFavArtists ]  = useState([])
  // const [ favTracks,  setFavTracks  ]  = useState([])
  // const [favAlbums,  setFaveAlbums ]  = useState([]) 

  return (
    <div className="App">
      <AppContext.Provider>
      <Header 
        onSearch={ setSearchResults } 
        currentPage={ currentPage } 
        itemsPerPage={ itemsPerPage } 
      />
      <Favorites />
      {/* <Login /> */}
      <LogOut />
      
      </AppContext.Provider>
      <MainContainer 
        searchResults={ searchResults }
        currentPage={ currentPage } 
        setCurrentPage={ setCurrentPage } 
        itemsPerPage={ setItemsPerPage } 
      />
    </div>
  );
}

export default App;
