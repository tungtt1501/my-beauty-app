import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import './dashboard.css'
import { NavLink } from 'react-router-dom';

const dashboardMenus = [
  {
    name: 'Dashboard',
    to: '/admin',
    exact: true
  },
  {
    name: 'Services',
    to: '/admin/services',
    exact: false
  }
];

const DashboardLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
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