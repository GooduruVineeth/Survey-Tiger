import React from 'react'
 
import { AppBar,Toolbar, IconButton,Typography ,Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const  Header = () => {
    return (
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu" onClick={()=>{console.log("clicked");} }>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Survey Tiger
          </Typography>

        </Toolbar>
      </AppBar>
    )
}

export default Header;