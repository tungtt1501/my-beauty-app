import * as Types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
export const loginRequest = (user) => {
    return (dispatch) => {
        return callApi(`users`, 'POST', user).then(res => {
            dispatch(login(res.data));
        });
    }
}
export const login = (user) => {
    return {
        type: Types.LOGIN,
        user
    }
}