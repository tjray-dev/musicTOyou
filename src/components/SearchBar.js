import { useState, useEffect } from 'react'
function SearchBar( { onSearch, currentPage, itemsPerPage } ){
  const [ searchType, setSearchType ] = useState("")
  const [ searchTerm, setSearchTerm ] = useState("")
  
  useEffect(() => {
    // declaring the const variables needed for every fetch regardless of type 
    const baseURL    = 'https://api.discogs.com/database/search?'
    const authKey    = 'key=DRbPFOFZKsmVvvnOrLoC'
    const authSecret = 'secret=pdjKcOwjNpdnhiVcmuChnntCMjVmbvwH'

    fetch(`${baseURL}page=${currentPage}&per_page=${itemsPerPage}&${searchType}=${searchTerm}&${authKey}&${authSecret}`)
      .then( r => r.json() )
        .then( data => onSearch(data.results) )
  }, [searchTerm, currentPage, searchType])
  return(
    // The search form 
    <form>
      {/* These are the radio buttons that set the type of search being done */}
      <input 
        type='radio' 
        value='artist' 
        name='searchType' 
        onClick={ e => setSearchType(e.target.value) } 
      /> Artist 
      <input 
        type='radio' 
        value='title' 
        name='searchType' 
        onClick={ e => setSearchType(e.target.value) } 
      /> Album 
      <input 
        type='radio' 
        value='track' 
        name='searchType' 
        onClick={ e => setSearchType(e.target.value) } 
      /> Track 
      <input 
        type='radio'
        value='genre'
        name='searchType'
        onClick={ e => setSearchType(e.target.value) } 
      /> Genre 
      {/* This is the text field for the search functionality */}
      <input 
        type='text' 
        placeholder='This is a search bar...' 
        value={ searchTerm }
        onChange={ (e) => setSearchTerm(e.target.value) }
      />
      <input type='submit' value='Search' />
    </form>
  )
}
export default SearchBar