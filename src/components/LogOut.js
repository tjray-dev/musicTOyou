// This will be a default page for non-users/onLoad
import Button from "react-bootstrap/Button";
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function LogOut(){

  const history = useHistory()

 function handleLogOut(){
   localStorage.clear();
   history.push('/SignUp')
 }

  
  return(
    <Button onClick={handleLogOut}>LogOut</Button>
  )
}
export default LogOut