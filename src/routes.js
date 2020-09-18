import React from 'react';
import About from './components/About/About';
import BlogList from './components/BlogList/BlogList';
import ServiceList from './components/ServiceList/ServiceList';
import HomePage from './pages/HomePage/HomePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/services',
        exact: false,
        main: () => <ServiceList />
    },
    {
        path: '/gallery',
        exact: false,
        main: () => <BlogList />
    }
];

export default routes;