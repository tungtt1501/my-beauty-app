import * as Types from './../constants/ActionTypes'
var initialState = [];

var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if (user.id === id) {
            result = index;
        }
    });
    return result;
}

const users = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_USERS:
            state = action.users;
            return [...state]
        case Types.ADD_USER:
            state.push(action.user);
            return [...state];
        case Types.UPDATE_USER:
            index = findIndex(state, action.user.userId);
            state[index] = action.user;
            return [...state];
        case Types.DELETE_USER:
            if (action.id) {
                index = findIndex(state, action.id);
                state.splice(index, 1);
            }

            return [...state];
        default: return [...state]
    }
}

export default users;