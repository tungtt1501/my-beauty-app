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
        return callApi('services', 'GET', null).then(res => {
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