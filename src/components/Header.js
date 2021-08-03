// import Login from './Login'
import SearchBar from './SearchBar'
import SignUp from './SignUp'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
// parent component that will hold everything displayed across 'pages'
function Header(){
  return(
    <>
      <Nav>
        <SearchBar />
        <SignUp />
      </Nav>
    </>
  )
}
export default Header