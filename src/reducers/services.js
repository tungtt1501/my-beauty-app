import * as Types from './../constants/ActionTypes'
var initialState = [];

const services = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_SERVICES:
            state = action.services;
            return [...state]
        default: return [...state]
    }
}

export default services;