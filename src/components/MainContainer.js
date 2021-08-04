// This component will render whatever will be the focus of the page at the time of rendering
import Card from './Card'
function MainContainer({ searchResults, setCurrentPage, currentPage, setFavArtists, setFavTracks, setFavAlbums }){

  function renderCards(){
   searchResults.map( result => { <Card 
     key={result} 
     result={result} 
     setFavArtists={setFavTracks} 
     setFavAlbums={setFavAlbums} 
    />})
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
    <div>
      { renderCards()}
      <button onClick={ previousPage }>Previous Page</button>
      <button onClick={ nextPage }>Next Page</button>
    </div>
  )
}
export default MainContainer