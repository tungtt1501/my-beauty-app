import React from 'react';
import Orders from './Orders/Orders';
import ServiceCategoryForm from './Services/ServiceCategoryForm';
import ServiceDashBoard from './Services/ServiceDashBoard';

const dashboardroutes = [
    {
        path: '/admin',
        exact: true,
        main: () => <Orders />
    },
    {
        path: '/admin/services',
        exact: true,
        main: () => <ServiceDashBoard />
    },
    {
        path: '/admin/services/:id/editCate',
        exact: true,
        main: () => <ServiceCategoryForm />
    },
    {
        path: '/admin/services/addCategory',
        exact: true,
        main: () => <ServiceCategoryForm />
    }
];

export default dashboardroutes;