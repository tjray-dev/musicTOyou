// This is where any react Hooks can be imported
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
// These are the Base components
// import Search from './Search'
import Favorites from './Favorites'
import LogOut from './LogOut'
import NavBar from './NavBar'
import SignUp from './SignUp'
import SearchBar from './SearchBar'
// import Login from './Login'
import MainContainer from './MainContainer'
// import {AppContext} from '../libs/contextLib'
// This is where styles and other things can be imported
import '../App.css';

function App() {
  const [ searchResults, setSearchResults ] = useState([])
  const [ currentPage,   setCurrentPage ]   = useState(1)
  const [ itemsPerPage,  setItemsPerPage ]  = useState(4)
  // State for the favorites page
  // These will need to be passed down to the card 
  const [ favArtists, setFavArtists ]  = useState([])
  const [ favTracks,  setFavTracks  ]  = useState([])
  const [ favAlbums,  setFavAlbums ]  = useState([])
  // 

  return (
    <div className="App">
      {/* <AppContext.Provider> */}
      <NavBar />
      <Switch>
        <Route path='/main_container'>
          <MainContainer 
            searchResults={ searchResults }
            currentPage={ currentPage }
            setCurrentPage={ setCurrentPage } 
            itemsPerPage={ setItemsPerPage }
            setFavArtists={ setFavArtists }
            setFavTracks={ setFavTracks } 
            setFavAlbums={ setFavAlbums }  
          />
        </Route>
        <Route path='/favorites'>
          <Favorites
          favArtist={ favArtists }
          favTracks={ favTracks }
          favAlbums={ favAlbums }
          />
        </Route>
        <Route path='/search'>
          <SearchBar 
            onSearch={ setSearchResults } 
            currentPage={ currentPage } 
            itemsPerPage={ itemsPerPage }  
          />
          {/* <Search 
            onSearch={ setSearchResults } 
            currentPage={ currentPage } 
            itemsPerPage={ itemsPerPage } 
          /> */}
        </Route>
        <Route exact path='/'>
          <SignUp />
        </Route>
      </Switch>
      {/* <SignUp /> */}
      {/* <SearchBar 
        onSearch={ setSearchResults } 
        currentPage={ currentPage } 
        itemsPerPage={ itemsPerPage }  
      />
       */}
     
      {/* <Login /> */}
      <LogOut />
      
      {/* </AppContext.Provider> */}
      
      
    </div>
  );
}

export default App;
