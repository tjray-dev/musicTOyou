import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import DomainIcon from '@material-ui/icons/Domain';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});


const Drawer = props => {
  const { history, user, artists, albums } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Login",
      icon: <HomeIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "Main",
      icon: <DomainIcon />,
      onClick: () => history.push("/main_container")
    },
    {
        text: "Favorites",
        icon: <FavoriteIcon />,
        onClick: () => history.push("/favorites")
    },
    {
      text: "SignUp",
      icon: <QueueMusicIcon />,
      onClick: () => history.push("/signup")
  },
    {
      text: "LogOut",
      icon: <ExitToAppIcon />,
      onClick: () =>  handleLogOut()
    }
  ];
  
  function handleLogOut(){
    fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "favoriteArtists": artists,
        "favoriteAlbums": albums 
        }),
      headers: {
        'Content-Type' : 'application/json; charset=UTF-8' 
      },
      
    }).then(res => res.json()).then(data => console.log(data)).then(history.push("/signup"))
  }

  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
