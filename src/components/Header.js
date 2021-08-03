import Login from './Login'
import SearchBar from './SearchBar'
import SignUp from './SignUp'
// parent component that will hold everything displayed across 'pages'
function Header( { onSearch } ){
  return(
    <header>
      <Login />
      <SearchBar onSearch={ onSearch }/>
      <SignUp />
    </header>
  )
}
export default Header