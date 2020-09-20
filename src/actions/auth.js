import * as Types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
export const loginRequest = (user) => {
    return (dispatch) => {
        return callApi(`users`, 'POST', user).then(res => {
            if (!res.data.error) {
                dispatch(loginSuccess(res.data));
            } else {
                dispatch(loginError(res.data));
            }
        });
    }
}
export const loginSuccess = (auth) => {
    return {
        type: Types.LOGIN_SUCCESS,
        auth
    }
}

export const loginError = (auth) => {
    return {
        type: Types.LOGIN_ERROR,
        auth
    }
}

export const logout = () => {
    return {
        type: Types.LOGOUT
    };
};