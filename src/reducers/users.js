import * as Types from './../constants/ActionTypes'
var initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_USERS:
            state = action.users;
            return [...state]
        default: return [...state]
    }
}

export default users;