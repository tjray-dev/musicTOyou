import Card from './Card'
function Favorites( { favArtists, favAlbums }){
  return(
      <div style={{display: 'block'}}>
        {favAlbums ? favAlbums.map(album => <Card title={album.title} thumb={album.thumb} resource={album.resource} />) : null }
        {favArtists ? favArtists.map(artist => <Card title={artist.title} thumb={artist.thumb} resource={artist.resource} />) : null }
      </div>
  )

}
export default Favorites