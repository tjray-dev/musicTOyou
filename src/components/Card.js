import { useState, } from 'react'

// !TO DO!
  // ** Start with one artist and work outward from there **
  // build logic to display different cards using result.type
    // dig through data and figure out general shape of each type

function Card({ title, thumb, type, resource }){
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
        return (
          <div>
            <li>{detail.title}</li>
            <li><strong>Genres:</strong>{detail.genres.map((g) => <li key={g}>{g}</li> )}</li>
            <li><strong>Tracks:</strong>{detail.tracklist.map(track => <li key={track.position}>{track.title}</li>)}</li>
            <li><strong>Styles:</strong>{detail.styles.map( style => <li key={style}>{style}</li>)}</li>
          </div>
        )
      case 'artist':
        console.log(detail)
        return (
          <div>
            <li>{detail.name}</li>
            <li><strong>Members:</strong>{detail.members.map(member => <li key={member.name}>{member.name}</li>)}</li>
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

  return (
    <div>
      <h6>{ title }</h6>
      <img src={ thumb } alt="This is a card" onClick={ handleDetails } />
      {showDetails ? renderDetail() : null }
    </div>
  )
}
export default Card