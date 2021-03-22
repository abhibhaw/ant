import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import NewHub from '../dialogs/NewHub';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
function Hub() {
    const classes = useStyles();
    const [newHub, setNewHub] = useState(false);

    const closeNewHub = () => setNewHub(false);
    const openNewHub = () => setNewHub(true);
    return (
        <div>
            <NewHub open={ newHub } onClose={ closeNewHub }></NewHub>
            <AppBar position="static" color="default">
                <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Hubs
                </Typography>
                <div className={classes.search} >
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    <Button 
                        color="primary" 
                        className="ml-2 shadow" 
                        variant="contained" 
                        startIcon={ <DeviceHubIcon /> }
                        onClick={ openNewHub }
                        >
                       Add Hub
                    </Button>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Hub
