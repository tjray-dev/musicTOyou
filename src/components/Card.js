import { useState, } from 'react'
import {Typography,AppBar, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, List, ListItem, ListItemIcon, ListItemText, Button, ImageListItem, ImageList} from '@material-ui/core';

function Card({ title, thumb, type, resource, setFavAlbum, setFavArtist, favAlbum, favArtist }){

  
  const [ showDetails, setShowDetails ] = useState(false)
  const [ detail, setDetail ] = useState({
    title: '',
    genres: [],
    tracklist: [],
    styles: []
  })
  function renderDetail(){
    switch (type){
      case 'master':
        console.log(detail)
        return (
          <div>
            <li>{detail.title}</li>
            <li><strong>Genres:</strong>{detail.genres.map((g) => <li key={g}>{g}</li> )}</li>
            <li><strong>Tracks:</strong>{detail.tracklist.map(track => <li key={track.position}>{track.title}</li>)}</li>
            <li><strong>Styles:</strong>{detail.styles.map( style => <li key={style}>{style}</li>)}</li>
          </div>
        )
      case 'artist':
        return (
          <div>
            <li>{detail.name}</li>
            { detail.members ? <li><strong>Members:</strong>{detail.members.map(member => <li key={member.name}>{member.name}</li>)}</li> : null }
          </div>
        )
      default:
        return (
          <div>
            <span>Invalid</span>
          </div>
        )
    }
  }
  function handleDetails(){
    fetch(resource).then(r => r.json())
      .then(data => setDetail(data))
        .then(setShowDetails(!showDetails))
  }
  function handleAddToFavorite(){
    let favorite = {
      title: title,
      thumb: thumb,
      resource: resource
    }
    let newFavs = []
    switch (type){
      case 'master':
        newFavs = [...favAlbum, favorite]
        setFavAlbum(newFavs)
        break;
      case 'artist':
        newFavs = [...favAlbum, favorite]
        setFavArtist(newFavs)
        break;
    }
    alert("Added To Favorites")
  }

  return (
    
      <div>
        <Container maxWidth='sm'>
          <Typography variant='h6'>{ title }</Typography>
          <ImageList rowHeight={200}>
            <ImageListItem>
              <img src={ thumb } alt="This is a card" onClick={ handleDetails } />
              </ImageListItem>
            </ImageList>
          <Button onClick={(e) => handleAddToFavorite(e) } variant='contained' color='primary'>Favorite</Button>
          {showDetails ? renderDetail() : null }
        </Container>
      </div>
    
  )
}
export default Card