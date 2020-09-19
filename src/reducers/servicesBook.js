import * as Types from '../constants/ActionTypes'
var initialState = [];

var findIndex = (servicesBook, id) => {
    var result = -1;
    servicesBook.forEach((serviceBook, index) => {
        if (serviceBook.id === id) {
            result = index;
        }
    });
    return result;
}

const servicesBook = (state = initialState, action) => {
    var { serviceBook } = action;
    switch (action.type) {
        case Types.FETCH_SERVICES_BOOK:
            state = action.servicesBook;
            return [...state]
        case Types.UPDATE_SERVICES_BOOK:
            var index = findIndex(state, serviceBook.id);
            state[index] = serviceBook;
            return [...state];
        default: return [...state]
    }
}

export default servicesBook;