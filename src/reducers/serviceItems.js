import * as Types from './../constants/ActionTypes'
var initialState = [];

const services = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ALL_SERVICE_ITEMS:
            state = action.serviceItems;
            
            return [...state]
        default: return [...state]
    }
}

export default services;