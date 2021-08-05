import Card from './Card'
import SearchBar from './SearchBar'
function MainContainer({ searchResults, setCurrentPage, currentPage, setFavArtists, setFavTracks, setFavAlbums, onSearch, itemsPerPage }){

  function mapHelper(result){
    switch (result.type) {
      case 'master':
        // if type === master then the searchResults is a list of 'Albums'
        return <Card 
          key={`${result.id}_${result.type}`} 
          title={result.title}
          thumb={result.thumb}
          type={result.type}
          resource={result.resource_url} />
      case 'artist':
        return <Card 
          key={`${result.id}_${result.type}`}
          title={result.title} 
          thumb={result.thumb}
          type={result.type} 
          resource={result.resource_url} />
    } 
  }
  function renderCards(){
    let cards =  searchResults.map( result => mapHelper(result))
    return cards
  }
 
  function previousPage(){
    if(currentPage > 1 ){
      setCurrentPage(--currentPage)
    }
  }

  function nextPage(){
    setCurrentPage(++currentPage)
  }

  return(
    <>
      <SearchBar 
        onSearch={ onSearch } 
        currentPage={ currentPage } 
        itemsPerPage={ itemsPerPage } 
      />
      { renderCards() }
      <button onClick={ previousPage }>Previous Page</button>
      <button onClick={ nextPage }>Next Page</button>
    </>
  )
}
export default MainContainer