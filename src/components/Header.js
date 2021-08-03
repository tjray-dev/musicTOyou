import Login from './Login'
import SearchBar from './SearchBar'
import SignUp from './SignUp'
// parent component that will hold everything displayed across 'pages'
function Header( { onSearch, currentPage, itemsPerPage } ){
  return(
    <header>
      <Login />
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