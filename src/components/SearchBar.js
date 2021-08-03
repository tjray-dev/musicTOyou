// checkboxes will set a state that is passed up and interpolated into the fetch
function SearchBar(){
  return(
    <form>
      <input type='checkbox' className='searchType' id='artist' />
        <label htmlFor='artist'>Artist</label>
      <input type='checkbox' className='searchType' id='album'/>
        <label htmlFor='album'>Album</label>
      <input type='text' placeholder='This is a search bar...' />
      <input type='button' value='Search' />
    </form>
  )
}
export default SearchBar