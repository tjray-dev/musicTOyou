import React, { useState, useEffect } from 'react'
import { Route, Switch} from 'react-router-dom'
import Favorites from './Favorites'
import LogOut from './LogOut'
import SignUp from './SignUp'
import MainContainer from './MainContainer'
import Drawer from "./Drawer";
import Login from './Login'
import '../App.css';
import {Typography,AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {QueueMusic, HomeIcon} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});


function App() {
 const classes = useStyles();

  const [ user, setUser ] = useState({})
  const [ users, setUsers ] = useState([])
  const [ searchResults, setSearchResults ] = useState([])
  const [ currentPage,   setCurrentPage ]   = useState(1)
  const [ itemsPerPage,  setItemsPerPage ]  = useState(4)
  const [ favArtists, setFavArtists ]  = useState([])
  const [ favAlbums,  setFavAlbums ]  = useState([])
  console.log(user)
  function setDefaults(){
    setUser({})
    setFavArtists([])
    setFavAlbums([])
  }
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(r => r.json())
        .then(setUsers).then()
  }, [user])

  
  
  return (
    
    <> 
      <div style={{display: 'flex'}}> 
      <CssBaseline/>
      <AppBar position='relative' style={{marginLeft: '222.60px'}}> 
        <Toolbar>
          <QueueMusic/>
          <Typography variant='h4'>
            Music-To-U
          </Typography> 
        </Toolbar>
      </AppBar>
      </div>
      <div className={classes.container}>
      <Drawer user={user} artists={favArtists} albums={favAlbums}/>
      <Switch>
        <Route exact from="/" render={props => <Login {...props} users={users} setUser={setUser} />} />
        <Route exact path="/main_container" render={props => <MainContainer {...props}  searchResults={ searchResults }
              currentPage={ currentPage }
              itemsPerPage={ itemsPerPage }
              favAlbums={ favAlbums}
              favArtists={ favArtists }
              user={user}
              onSearch={ setSearchResults }
              setCurrentPage={ setCurrentPage } 
              setFavArtists={ setFavArtists }
              setFavAlbums={ setFavAlbums }  />} />
        <Route exact path="/favorites" render={props => <Favorites {...props}  favArtist={ favArtists }
            favAlbums={ favAlbums }/>} />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
        <Route exact path="/signup" render={props => <LogOut {...props} user={user} artists={favArtists} albums={favAlbums} setUser={setUser}/>} />
      </Switch>
    </div>
  
      </>
    );
}

export default App;
