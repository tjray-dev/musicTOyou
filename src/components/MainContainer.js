// This component will render whatever will be the focus of the page at the time of rendering
import Card from './Card'
function MainContainer({ searchResults}){

  return(
    <div>
      {searchResults.map(result => <Card key={ result.catno } result={ result } />)}
    </div>
  )
}
export default MainContainer