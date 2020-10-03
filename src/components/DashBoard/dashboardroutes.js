import React from 'react';
import Orders from './Orders/Orders';
import ServiceCategoryForm from './Services/ServiceCategoryForm';
import ServiceDashBoard from './Services/ServiceDashBoard';
import ServiceDetailForm from './Services/ServiceDetailForm';
import UserDashboard from './User/UserDashBoard';

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
    },
    {
        path: '/admin/services/addServiceDetail',
        exact: true,
        main: () => <ServiceDetailForm />
    },
    {
        path: '/admin/services/:id/editServiceDetail',
        exact: true,
        main: () => <ServiceDetailForm />
    },
    {
        path: '/admin/users',
        exact: true,
        main: () => <UserDashboard />
    }
];

export default dashboardroutes;