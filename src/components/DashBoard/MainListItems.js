import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StyleIcon from '@material-ui/icons/Style';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import './dashboard.css'
import { NavLink } from 'react-router-dom';

const dashboardMenus = [
  {
    name: 'Dashboard',
    to: '/admin',
    exact: true,
    icon: <DashboardIcon />
  },
  {
    name: 'Services',
    to: '/admin/services',
    exact: false,
    icon: <StyleIcon />
  },
  {
    name: 'Users',
    to: '/admin/users',
    exact: false,
    icon: <SupervisorAccountIcon />
  }
];

const DashboardLink = ({ label, icon, to, activeOnlyWhenExact }) => {
  return (
    <ListItem button>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <NavLink to={to}
        exact={activeOnlyWhenExact}
        className="dashboard-link"
        activeClassName="dashboard-link-active">
        {label}
      </NavLink>
    </ListItem>
  )
}

const showDashboardMenu = (menus) => {
  var result = null;
  if (menus) {
      result = menus.map((menu, index) => {
          return (
              <DashboardLink
                  key={index}
                  label={menu.name}
                  icon={menu.icon}
                  to={menu.to}
                  activeOnlyWhenExact={menu.exact}
              />
          )
      })
  }
  return result;
}

export const MainListItems = () => {
  return (
    <div>{showDashboardMenu(dashboardMenus)}</div>
  )
}