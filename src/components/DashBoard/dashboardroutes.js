import React from 'react';
import Orders from './Orders/Orders';
import ServiceDashBoard from './Services/ServiceDashBoard';

const dashboardroutes = [
    {
        path: '/admin',
        exact: true,
        main: () => <Orders />
    },
    {
        path: '/admin/services',
        exact: false,
        main: () => <ServiceDashBoard />
    }
];

export default dashboardroutes;