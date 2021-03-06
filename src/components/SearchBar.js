import { useState, useEffect } from 'react'
function SearchBar( { onSearch, currentPage, itemsPerPage } ){
  const [ searchType, setSearchType ] = useState("")
  const [ searchTerm, setSearchTerm ] = useState("")
  
  useEffect(() => {
    const baseURL    = 'https://api.discogs.com/database/search?'
    const authKey    = 'key=DRbPFOFZKsmVvvnOrLoC'
    const authSecret = 'secret=pdjKcOwjNpdnhiVcmuChnntCMjVmbvwH'

    fetch(`${baseURL}page=${currentPage}&per_page=${itemsPerPage}&${searchType}=${searchTerm}&${authKey}&${authSecret}`)
      .then( r => r.json() )
        .then( data => onSearch(data.results) )
  }, [searchTerm, currentPage, searchType, itemsPerPage, onSearch])

  return(
    <form>
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
      />Album 
      
      <input 
        type='radio'
        value='genre'
        name='searchType'
        onClick={ e => setSearchType(e.target.value) } 
      />Genre 
      
      <input 
        type='text' 
        placeholder='Never gunna say goodbye...' 
        value={ searchTerm }
        onChange={ (e) => setSearchTerm(e.target.value) }
      />
    </form>
  )
}
export default SearchBar