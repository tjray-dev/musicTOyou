import { useState, useEffect } from 'react'
function SearchBar( { onSearch } ){

  useEffect(() => {
    const authKey    = '&key=DRbPFOFZKsmVvvnOrLoC'
    const authSecret = '&secret=pdjKcOwjNpdnhiVcmuChnntCMjVmbvwH'
    const baseURL    = 'https://api.discogs.com/database/search?'
  
    fetch(`${baseURL}artist=tool${authKey}${authSecret}`)
      .then(r => r.json())
        .then(data => onSearch(data.results) )
  }, [])
  return(
    <form>
      <input type='checkbox' className='searchType' id='artist' />
        <label htmlFor='artist'>Artist</label>
      <input type='checkbox' className='searchType' id='album'/>
        <label htmlFor='album'>Album</label>
      <input type='text' placeholder='This is a search bar...' />
      <input type='button' value='Search' />
    </form>
  )
}
export default SearchBar