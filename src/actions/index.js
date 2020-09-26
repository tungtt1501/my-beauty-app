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

export const actFetchServiceItemsRequest = (categoryId) => {
    return (dispatch) => {
        return callApi(`serviceItems?categoryId=${categoryId}`, 'GET', null).then(res => {
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

export const actFetchAllServiceItemsRequest = () => {
    return (dispatch) => {
        return callApi(`serviceItems`, 'GET', null).then(res => {
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
        return callApi('serviceBooks', 'POST', serviceBook).then(res => {
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
        return callApi(`serviceBooks`, 'GET', null).then(res => {
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
        return callApi(`serviceBooks`, 'PUT', serviceBook).then(res => {
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
        return callApi(`serviceBooks?id=${id}`, 'GET', null).then(res => {
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