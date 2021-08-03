// This is where any react Hooks can be imported
import React, { useState } from 'react'
// These are the Base components
import Header from './Header'
import Favorites from './Favorites'
import LogOut from './LogOut'
import MainContainer from './MainContainer'
// This is where styles and other things can be imported
import '../App.css';

function App() {
  const [ searchResults, setSearchResults ] = useState([])
  const [ currentPage,   setCurrentPage ]   = useState(1)
  const [ itemsPerPage,  setItemsPerPage ]  = useState(20)

  return (
    <div className="App">
      <Header 
        onSearch={ setSearchResults } 
        currentPage={ currentPage } 
        itemsPerPage={ itemsPerPage } 
      />
      <Favorites />
      <LogOut />
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
