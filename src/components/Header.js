import Login from './Login'
import SearchBar from './SearchBar'
import SignUp from './SignUp'
// parent component that will hold everything displayed across 'pages'
function Header(){
  return(
    <>
      <h1>Hello World!</h1>
      <Login />
      <SearchBar />
      <SignUp />
    </>
  )
}
export default Header