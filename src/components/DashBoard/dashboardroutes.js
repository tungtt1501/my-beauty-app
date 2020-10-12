import React from 'react';
import GalleryDashBoard from './Gallery/GalleryDashBoard';
import GalleryAddEditPage from './Gallery/GalleryAddEditPage';
import Orders from './Orders/Orders';
import ServiceCategoryEditPage from './Services/ServiceCategoryEditPage';
import ServiceDashBoard from './Services/ServiceDashBoard';
import ServiceItemEditPage from './Services/ServiceItemEditPage';
import UserDashboard from './User/UserDashBoard';
import UserEditPage from './User/UserEditPage';

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
        main: () => <ServiceCategoryEditPage />
    },
    {
        path: '/admin/services/addCategory',
        exact: true,
        main: () => <ServiceCategoryEditPage />
    },
    {
        path: '/admin/services/addServiceDetail',
        exact: true,
        main: () => <ServiceItemEditPage />
    },
    {
        path: '/admin/services/:id/editServiceDetail',
        exact: true,
        main: () => <ServiceItemEditPage />
    },
    {
        path: '/admin/users',
        exact: true,
        main: () => <UserDashboard />
    },
    {
        path: '/admin/users/addUser',
        exact: true,
        main: () => <UserEditPage />
    },
    {
        path: '/admin/users/:id/editUser',
        exact: true,
        main: () => <UserEditPage />
    },
    {
        path: '/admin/gallery',
        exact: true,
        main: () => <GalleryDashBoard />
    },
    {
        path: '/admin/gallery/add',
        exact: true,
        main: () => <GalleryAddEditPage />
    },
    {
        path: '/admin/gallery/:photoId',
        exact: true,
        main: () => <GalleryAddEditPage />
    }
];

export default dashboardroutes;