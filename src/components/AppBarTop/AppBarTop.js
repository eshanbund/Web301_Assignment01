
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
  };
  
function AppBarTop(props){
    const{ classes }=props;
    return(
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar variant='headline'>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h8" color="inherit" className={classes.grow}>
                COUNTERAPP
              </Typography>
            </Toolbar>
        </AppBar>
      </div> 
    );
}

AppBarTop.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(AppBarTop);
