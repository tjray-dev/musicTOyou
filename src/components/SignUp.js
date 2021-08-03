// Will render a new user form and handle the submission of said form
function SignUp(){
  return(
    <form>
      <input type='text' className='signUp' placeholder='Insert Name Here...' />
      <input type='text' className='signUp' placeholder='Insert Password Here...' />
      <input type='text' className='signUp' placeholder='First Name' />
      {/* submit button */}
    </form>
  )
}
export default SignUp