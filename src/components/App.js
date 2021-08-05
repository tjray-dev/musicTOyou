import React, { useState, useEffect } from 'react'
import { Route, Switch} from 'react-router-dom'
import Favorites from './Favorites'
import LogOut from './LogOut'
import NavBar from './NavBar'
import SignUp from './SignUp'
import SearchBar from './SearchBar'
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

  const [ users, setUsers ] = useState([])
  const [ searchResults, setSearchResults ] = useState([])
  const [ currentPage,   setCurrentPage ]   = useState(1)
  const [ itemsPerPage,  setItemsPerPage ]  = useState(4)
  const [ favArtists, setFavArtists ]  = useState([])
  const [ favTracks,  setFavTracks  ]  = useState([])
  const [ favAlbums,  setFavAlbums ]  = useState([])
 
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(r => r.json())
        .then(setUsers)
  }, [])

  
  
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
      <Drawer />
      <Switch>
        <Route exact from="/" render={props => <Login {...props} />} />
        <Route exact path="/main_container" render={props => <MainContainer {...props}  searchResults={ searchResults }
              currentPage={ currentPage }
              itemsPerPage={ itemsPerPage }
              onSearch={ setSearchResults }
              setCurrentPage={ setCurrentPage } 
              setFavArtists={ setFavArtists }
              setFavTracks={ setFavTracks } 
              setFavAlbums={ setFavAlbums }  />} />
        <Route exact path="/about" render={props => <Favorites {...props} favArtist={ favArtists }
            favTracks={ favTracks }
            favAlbums={ favAlbums }/>} />
        <Route exact path="/signup" render={props => <SignUp {...props} />} />
      </Switch>
    </div>
        {/* <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
                  Welcome to Music-To-YOU
              </Typography>
              <Typography variant='h5' align='center' color="textSecondary" caption>
                Hello music fans and welcome to MTU! Your one stop shop for everything music related
              </Typography>
              </Container>
          </div>
        </main> */}
        <LogOut />
      
      </>
    );
}

export default App;
