import * as Types from './../constants/ActionTypes'
var initialState = {};

const userEditItem = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USER_BY_ID:
            state = action.user;
            return { ...state }

        case Types.RESET_USERS:
            state = null;
            return { ...state }

        default: return { ...state }
    }
}

export default userEditItem;