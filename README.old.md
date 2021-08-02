# musicTOyou

# Check List

  1. header
    header will hold the search bar, signIn/Up function
    1a. search bar will be its own component
        search with drop down 
            artist
            genre
            title
            etc. 
    1b. sign in / sign up will be its own component
        should present with two inital buttons
        on click should render the right forms 
        sign up should 
  2. main container
    main will hold the detial cards, and a few h tags
  3. side bar
    side bar will house user details and a condensed list of information


# Data Shape
// data/db.json
{
  users: [
    {
      userName: 'string',
      userEmail: 'string',
      password: 'string',
      playlists: [
        {
          playlistName: 'string',
          songs: [
            {
              trackTitle: 'string',
              otherTrackData: 'data type',
              ...
            }
          ]
        }
      ]
    }
  ]
}