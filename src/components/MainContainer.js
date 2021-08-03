// This component will render whatever will be the focus of the page at the time of rendering
import Card from './Card'
function MainContainer( { searchResults, setCurrentPage, currentPage } ){

   function previousPage(){
     if(currentPage > 1 ){
      setCurrentPage( --currentPage )
      console.log(currentPage)
     }
   }
   function nextPage(){
     setCurrentPage( ++currentPage )
     console.log(currentPage)
   }
  return(
    <div>
      { searchResults.map(result => <Card key={ result.id } result={ result } />) }
      <button onClick={ previousPage }>Previous Page</button>
      <button onClick={ nextPage }>Next Page</button>
    </div>
   
  )
}
export default MainContainer