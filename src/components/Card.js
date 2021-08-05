import { useState, } from 'react'

// !TO DO!
  // ** Start with one artist and work outward from there **
  // build logic to display different cards using result.type
    // dig through data and figure out general shape of each type

function Card({ result: { country, thumb, genre, title, resource_url } }){
  const [ details, setDetails ] = useState(false)
  const [ album, setAlbum ] = useState({}) 
  function handleDetails(){
    fetch(resource_url).then(r => r.json()).then(data => setAlbum(data)).then(setDetails(!details))
  }
  return (
    <div>
      <h4>{ title }</h4>
      <img src={ thumb } alt={ title } onClick={ handleDetails } />
      <br />
      <button onClick={() => console.log("Added to Favorites")}>Favorite</button>
      { details ? 
        <div>
          <li>Album Title: { title }</li>
          <li>Genre(s): { genre }</li>
          <li>{ country }</li>
        </div>
       : 
        null }
    </div>
  )
}
export default Card