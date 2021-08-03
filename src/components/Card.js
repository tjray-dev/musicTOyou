import { useState, useEffect } from 'react'

function Card({ result: { country, thumb, genre, title } }){
  const [ displayDetail, setDisplayDetail ] = useState(false)

  return (
    <div className='ResultCard'>
      <h4>{ title }</h4>
      <img src={ thumb } alt={ title } onClick={() => setDisplayDetail( !displayDetail) } />
      { displayDetail ? 
        <div>
          <li>{ title }</li>
          <li>{ genre }</li>
          <li>{ country }</li>
        </div>
       : 
        null }
    </div>
  )
}
export default Card