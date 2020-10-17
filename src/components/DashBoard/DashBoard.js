import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IconButton, Hidden, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { MainListItems } from './MainListItems';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './dashboard.css'
import { ExitToApp } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import dashboardroutes from './dashboardroutes';
import { logout } from '../Login/AuthSlice';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'hidden'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    backgroundColor: 'gainsboro',
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  appbar: {
    position: 'fixed'
  },
}));

const Dashboard = (props) => {
  const {className, ...rest} = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('Guest');

  const avatar = '/static/images/avatars/avatar_6.png';
  const jobTitle = 'Admin';

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const history = useHistory();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.isAuthUser) {
      history.push("/signin");
    } else {
      const userDetail = JSON.parse(localStorage.getItem("user"));
      setName(userDetail.firstName + userDetail.lastName);
    }
  }, [auth, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    history.push("/signin");
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const showContent = (routes) => {
    var result = null;
    if(routes) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>
  }

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          src={avatar}
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List><MainListItems /></List>
      </Box>
    </Box>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          </Typography>
          {auth && (
            <IconButton color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleLogout}>
              <ExitToApp />
            </IconButton>)
          }
        </Toolbar>
      </AppBar>
      <Hidden lgUp>
        <Drawer anchor={'left'}
          open={open}
          onClose={toggleDrawer(false)}
          classes={{ paper: classes.mobileDrawer }}
          variant="temporary">
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor={'left'}
          open
          variant="persistent"
          classes={{ paper: classes.desktopDrawer }}>
          {content}
        </Drawer>
      </Hidden>
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {showContent(dashboardroutes)}
            
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;

