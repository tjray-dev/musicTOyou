import Card from './Card'
function Favorites( { favArtists, favAlbums }){
  return(
      <div style={{display: 'block'}}>
        {favAlbums ? favAlbums.map(album => <Card title={album.title}  />) : null }
      </div>
  )

}
export default Favorites