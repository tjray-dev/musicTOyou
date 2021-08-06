// This will be a default page for non-users/onLoad
import Button from "react-bootstrap/Button";
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function LogOut({user, artists, albums, }){
  const {id} = user
  const history = useHistory()
  console.log(user)
 function handleLogOut(user){
  fetch(`http://localhost:5000/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      "favoriteArtists": artists,
      "favoriteAlbums": albums 
      }),
    headers: {
      'Content-Type' : 'application/json; charset=UTF-8' 
    },
    
  }).then(res => res.json()).then(data => console.log(data))
  // .then(history.push('/SignUp'))
  // localStorage.clear();
   
 }

  
  return(
    <Button onClick={() => handleLogOut(user)}>LogOut</Button>
  )
}
export default LogOut