import Card from './Card'
import {Grid, Container} from '@material-ui/core';
function Favorites( { favArtists, favAlbums }){
  return(
    <main>
      <div style={{display: 'block'}}>
      <Container style={{marginTop: '50px'}}>
        <Grid container spacing={4} justify='center'>
        {favAlbums ? favAlbums.map(album => <Card title={album.title} thumb={album.thumb} resource={album.resource} />) : null }
        {favArtists ? favArtists.map(artist => <Card title={artist.title} thumb={artist.thumb} resource={artist.resource} />) : null }
        </Grid>
      </Container>
      </div>
    </main>
  )

}
export default Favorites