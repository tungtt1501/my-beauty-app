import * as Types from './../constants/ActionTypes'
var initialState = {};

const addBookService = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_SERVICE_BOOK:
            state = action.serviceBook;
            return { ...state };
        case Types.RESET_SERVICE_BOOK:
            state = null;
            return { ...state };
        default: return { ...state }
    }
}

export default addBookService;