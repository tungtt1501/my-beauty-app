import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IconButton, Hidden, Avatar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import LatestOrders from './LatestOrders';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './dashboard.css'
import { ExitToApp } from '@material-ui/icons';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from './../../actions/auth'
import Budget from './Budget';
import TotalCustomers from './TotalCustomer';
import TotalProfit from './TotalProfit';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://localhost:3006/">
        My Beauty Lausanne
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
}));

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

const Dashboard = ({ auth, logout, className, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const history = useHistory();

  useEffect(() => {
    if (!auth.isAuthUser) {
      history.push("/signin");
    }
  });

  const handleLogout = () => {
    logout();
    history.push("/signin");
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

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
          src={user.avatar}
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>{mainListItems}</List>
      </Box>
    </Box>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
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
            <Container maxWidth={false}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={4}
                  xs={12}
                >
                  <Budget />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={4}
                  xs={12}
                >
                  <TotalCustomers />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={4}
                  xs={12}
                >
                  <TotalProfit />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  xl={12}
                  xs={12}
                >
                  <LatestOrders />
                </Grid>
              </Grid>
              <Box pt={2}>
                <Copyright />
              </Box>
              <Box pt={2}>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </div >
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

