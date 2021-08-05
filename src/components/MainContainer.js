import Card from './Card'
import SearchBar from './SearchBar'
function MainContainer({ searchResults, setCurrentPage, currentPage, setFavArtists, setFavTracks, setFavAlbums, onSearch, itemsPerPage }){

  function renderCards(searchResults){
    let cards =  searchResults.map( result => { return <Card key={result.id} result={result} setFavArtists={setFavTracks} setFavAlbums={setFavAlbums} />})
    return cards
  }
 
  function previousPage(){
    if(currentPage > 1 ){
      setCurrentPage(--currentPage)
      console.log(currentPage)
    }
  }

  function nextPage(){
    setCurrentPage(++currentPage)
    console.log(searchResults)
  }

  return(
    <>
      <SearchBar 
        onSearch={ onSearch } 
        currentPage={ currentPage } 
        itemsPerPage={ itemsPerPage } 
      />
      { renderCards(searchResults) }
      <button onClick={ previousPage }>Previous Page</button>
      <button onClick={ nextPage }>Next Page</button>
    </>
  )
}
export default MainContainer