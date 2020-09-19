import * as Types from '../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_SERVICES_BOOK:
            return action.serviceBook;
        default:
            return state;
    }
}

export default itemEditing;