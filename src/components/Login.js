// will have a button that when clicked will render the Login form
function Login(){
  return(
    <>
      <button className='login' id='button'>Log In</button>
      <form>
        <input type='text' className='login' id='userName' placeholder="user name here..." />
        <input type='text' className='login' id='password' placeholder="user password here..." />
      </form>
    </>
  )
}
export default Login