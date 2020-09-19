import React from 'react';
import Dashboard from './components/DashBoard/DashBoard';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/signin',
        exact: false,
        main: () => <Login />
    },
    ,
    {
        path: '/admin',
        exact: false,
        main: () => <Dashboard />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;