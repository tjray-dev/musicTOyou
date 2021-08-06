import Card from './Card'
import SearchBar from './SearchBar'
import Favorites from './Favorites'

import {Typography,AppBar, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, List, ListItem, ListItemIcon, ListItemText, Button, ButtonGroup} from '@material-ui/core';
function MainContainer({ searchResults, setCurrentPage, currentPage, setFavArtists, setFavTracks, setFavAlbums, onSearch, itemsPerPage }){

  function mapHelper(result){
    switch (result.type) {
      case 'master':
        return <Card 
          key={`${result.id}_${result.type}`} 
          title={result.title}
          thumb={result.thumb}
          type={result.type}
          resource={result.resource_url}
          setFavAlbum={ setFavAlbums }
          favAlbum={ favAlbums } />
      case 'artist':
        return <Card 
          key={`${result.id}_${result.type}`}
          title={result.title} 
          thumb={result.thumb}
          type={result.type} 
          resource={result.resource_url} 
          setFavArtist={ setFavArtists } 
          favArtist={ favArtists }/>
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
      <ButtonGroup color='primary' variant='contained' orientation='vertical'>
        <Button onClick={ previousPage }>Back</Button><br></br> <br></br><br></br><br></br><br></br>
        <br></br> <br></br><br></br><br></br><br></br>
        <Button onClick={ nextPage }>Next</Button>
      </ButtonGroup>
      <Favorites />
      
    
      
    </>
  )
}
export default MainContainer