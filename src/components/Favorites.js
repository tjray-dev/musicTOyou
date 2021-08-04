
// !TO DO! 
  // build out favorites page and any child components needed
    // will need multiple states for the different kinds of lists
    // i.e. favorite artists, favorite tracks, favorite albums
function Favorites(){

  return(
    <>
    <div className='favorites' id='favArtists'>
      <span>These are my FAVORITE ARTISTS</span>
    </div>
    <div className='favorites' id='favTracks'>
      <span>These are my FAVORITE TRACKS</span>
    </div>
    <div className='favorites' id='favAlbums'>
      <span>These are my FAVORITE ALBUMS</span>
    </div>
    </>
  )

}
export default Favorites