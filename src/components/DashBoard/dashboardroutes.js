import React from 'react';
import GalleryDashBoard from './Gallery/GalleryDashBoard';
import GalleryAddEditPage from './Gallery/GalleryAddEditPage';
import Orders from './Orders/Orders';
import ServiceCategoryForm from './Services/ServiceCategoryForm';
import ServiceDashBoard from './Services/ServiceDashBoard';
import ServiceDetailForm from './Services/ServiceDetailForm';
import UserDashboard from './User/UserDashBoard';
import UserForm from './User/UserForm';

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
    },
    {
        path: '/admin/users/addUser',
        exact: true,
        main: () => <UserForm />
    },
    {
        path: '/admin/users/:id/editUser',
        exact: true,
        main: () => <UserForm />
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