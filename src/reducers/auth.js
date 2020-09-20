
import * as Types from './../constants/ActionTypes'
var initialState = {
    isAuthUser: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    isLoading: false,
    error: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN_SUCCESS:
            localStorage.setItem("user", JSON.stringify(action.auth.user));
            return { ...state, isAuthUser: true, user: action.auth.user };
        case Types.LOGIN_ERROR:
            return { ...state, isAuthUser: false, user: null, error: action.auth.error };
        case Types.LOGOUT:
            localStorage.clear("user");
            return { ...state, isAuthUser: false, user: null, error: null };
        default: return { ...state }
    }
}

export default auth;