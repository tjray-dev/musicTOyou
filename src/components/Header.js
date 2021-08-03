// import Login from './Login'
import SearchBar from './SearchBar'
import SignUp from './SignUp'
// import Login from './Login'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
// parent component that will hold everything displayed across 'pages'
// make ternary for login logout button functionality
function Header( { onSearch, currentPage, itemsPerPage } ){
  return(
    <header>
      {/* <Login /> */}
      <SearchBar 
        onSearch={ onSearch } 
        currentPage={ currentPage } 
        itemsPerPage={itemsPerPage} 
      />
      <SignUp />
    </header>
  )
}
export default Header