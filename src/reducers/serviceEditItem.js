import * as Types from './../constants/ActionTypes'
var initialState = {};

const serviceEditItem = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SERVICES_BY_ID:
            state = action.service;
            return { ...state }

        case Types.RESET_SERVICES_CATEGORY:
            state = null;
            return { ...state }

        default: return { ...state }
    }
}

export default serviceEditItem;