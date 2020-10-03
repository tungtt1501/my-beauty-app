import * as Types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'

export const actFetchBlogsRequest = () => {
    return (dispatch) => {
        return callApi('blogs', 'GET', null).then(res => {
            dispatch(actFetchBlogs(res.data));
        });
    }
}

export const actFetchBlogs = (blogs) => {
    return {
        type: Types.FETCH_BLOGS,
        blogs
    }
}

export const actFetchServicesRequest = () => {
    return (dispatch) => {
        return callApi('service_category', 'GET', null).then(res => {
            dispatch(actFetchServices(res.data));
        });
    }
}

export const actFetchServices = (services) => {
    return {
        type: Types.FETCH_SERVICES,
        services
    }
}

export const actResetServiceCategory = () => {
    return {
        type : Types.RESET_SERVICES_CATEGORY
    }
}

export const actFetchServiceByIdRequest = (categoryId) => {
    return (dispatch) => {
        return callApi(`service_category_by_id?id=${categoryId}`, 'GET', null).then(res => {
            dispatch(actFetchServiceById(res.data));
        });
    }
}

export const actFetchServiceById = (service) => {
    return {
        type: Types.FETCH_SERVICES_BY_ID,
        service
    }
}

export const actAddServicesCategoryRequest = (serviceCategory) => {
    return (dispatch) => {
        return callApi(`service_category`, 'POST', serviceCategory).then(res => {
            dispatch(actAddServicesCategory(res.data));
        });
    }
}

export const actAddServicesCategory = (serviceCategory) => {
    return {
        type: Types.ADD_SERVICES_CATEGORY,
        serviceCategory
    }
}

export const actUpdateServicesCategoryRequest = (serviceCategory) => {
    return (dispatch) => {
        return callApi(`service_category`, 'PUT', serviceCategory).then(res => {
            dispatch(actUpdateServicesCategory(res.data));
        });
    }
}

export const actUpdateServicesCategory = (serviceCategory) => {
    return {
        type: Types.UPDATE_SERVICES_CATEGORY,
        serviceCategory
    }
}

export const actDeleteServicesCategoryRequest = (id) => {
    return (dispatch) => {
        return callApi(`service_category?id=${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteServicesCategory(id));
            dispatch(actFetchAllServiceItemsRequest());
        });
    }
}

export const actDeleteServicesCategory = (id) => {
    return {
        type: Types.DELETE_SERVICES_CATEGORY,
        id
    }
}

export const actResetServiceDetail = () => {
    return {
        type : Types.RESET_SERVICES_DETAIL
    }
}

export const actFetchServiceDetailByIdRequest = (id) => {
    return (dispatch) => {
        return callApi(`service_item_by_id?id=${id}`, 'GET', null).then(res => {
            dispatch(actFetchServiceDetailById(res.data));
        });
    }
}

export const actFetchServiceDetailById = (serviceDetail) => {
    return {
        type: Types.FETCH_SERVICE_DETAIL_BY_ID,
        serviceDetail
    }
}

export const actFetchServiceItemsRequest = (categoryId) => {
    return (dispatch) => {
        return callApi(`service_item_by_category?categoryId=${categoryId}`, 'GET', null).then(res => {
            dispatch(actFetchServiceItems(res.data));
        });
    }
}

export const actFetchServiceItems = (serviceItems) => {
    return {
        type: Types.FETCH_SERVICE_ITEMS,
        serviceItems
    }
}

export const actAddServicesDetailRequest = (serviceDetail) => {
    return (dispatch) => {
        return callApi(`service_items`, 'POST', serviceDetail).then(res => {
            dispatch(actAddServicesDetail(res.data));
        });
    }
}

export const actAddServicesDetail = (serviceDetail) => {
    return {
        type: Types.ADD_SERVICE_DETAIL,
        serviceDetail
    }
}

export const actUpdateServicesDetailRequest = (serviceDetail) => {
    return (dispatch) => {
        return callApi(`service_items`, 'PUT', serviceDetail).then(res => {
            dispatch(actUpdateServicesDetail(res.data));
        });
    }
}

export const actUpdateServicesDetail = (serviceDetail) => {
    return {
        type: Types.UPDATE_SERVICE_DETAIL,
        serviceDetail
    }
}

export const actDeleteServicesDetailRequest = (id) => {
    return (dispatch) => {
        return callApi(`service_items?id=${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteServicesDetail(id));
        });
    }
}

export const actDeleteServicesDetail = (id) => {
    return {
        type: Types.DELETE_SERVICE_DETAIL,
        id
    }
}

export const actFetchAllServiceItemsRequest = () => {
    return (dispatch) => {
        return callApi(`service_items`, 'GET', null).then(res => {
            dispatch(actFetchAllServiceItems(res.data));
        });
    }
}

export const actFetchAllServiceItems = (serviceItems) => {
    return {
        type: Types.FETCH_ALL_SERVICE_ITEMS,
        serviceItems
    }
}

export const actAddServiceBookRequest = (serviceBook) => {
    return dispatch => {
        return callApi('order_services', 'POST', serviceBook).then(res => {
            dispatch(actAddServiceBook(res.data));
        });
    }
}

export const actAddServiceBook = (serviceBook) => {
    return {
        type : Types.ADD_SERVICE_BOOK,
        serviceBook
    }
}

export const actResetServiceBook = () => {
    return {
        type : Types.RESET_SERVICE_BOOK
    }
}

export const actFetchAllServicesBookRequest = () => {
    return (dispatch) => {
        return callApi(`order_services`, 'GET', null).then(res => {
            dispatch(actFetchAllServicesBook(res.data));
        });
    }
}

export const actFetchAllServicesBook = (servicesBook) => {
    return {
        type: Types.FETCH_SERVICES_BOOK,
        servicesBook
    }
}

export const actUpdateServicesBookRequest = (serviceBook) => {
    return (dispatch) => {
        return callApi(`order_services`, 'PUT', serviceBook).then(res => {
            dispatch(actUpdateServicesBook(res.data));
        });
    }
}

export const actUpdateServicesBook = (serviceBook) => {
    return {
        type: Types.UPDATE_SERVICES_BOOK,
        serviceBook
    }
}

export const actGetItemServicesBookRequest = (id) => {
    return (dispatch) => {
        return callApi(`order_service?id=${id}`, 'GET', null).then(res => {
            dispatch(actGetItemServicesBook(res.data));
        });
    }
}

export const actGetItemServicesBook = (serviceBook) => {
    return {
        type: Types.EDIT_SERVICES_BOOK,
        serviceBook
    }
}

export const actResetUsers = () => {
    return {
        type : Types.RESET_USERS
    }
}

export const actGetUsersRequest = () => {
    return (dispatch) => {
        return callApi(`users`, 'GET', null).then(res => {
            dispatch(actGetUsers(res.data));
        });
    }
}

export const actGetUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}

export const actFetchUserByIdRequest = (id) => {
    return (dispatch) => {
        return callApi(`user?id=${id}`, 'GET', null).then(res => {
            dispatch(actFetchUserById(res.data));
        });
    }
}

export const actFetchUserById = (user) => {
    return {
        type: Types.FETCH_USER_BY_ID,
        user
    }
}

export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return callApi(`user`, 'POST', user).then(res => {
            dispatch(actAddUser(res.data));
        });
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const actUpdateUserRequest = (user) => {
    return (dispatch) => {
        return callApi(`user`, 'PUT', user).then(res => {
            dispatch(actUpdateUser(res.data));
        });
    }
}

export const actUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user
    }
}

export const actDeleteUserRequest = (id) => {
    return (dispatch) => {
        return callApi(`user?id=${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteUser(id));
        });
    }
}

export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id
    }
}