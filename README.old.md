
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
