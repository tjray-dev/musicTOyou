// This will be a default page for non-users/onLoad
import Button from "react-bootstrap/Button";
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function LogOut(){

  const history = useHistory()

 function handleLogOut(){
  //  do a patch request to the json server to persist the data 
   localStorage.clear();
   history.push('/SignUp')
 }

  
  return(
    <Button onClick={handleLogOut}>LogOut</Button>
  )
}
export default LogOut