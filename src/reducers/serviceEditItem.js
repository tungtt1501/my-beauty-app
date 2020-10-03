import * as Types from './../constants/ActionTypes'
var initialState = {};

const serviceEditItem = (state = initialState, action) => {
    switch (action.type) {
        case Types.RESET_SERVICES_CATEGORY:
            state = null;

            return { ...state }
        case Types.FETCH_SERVICES_BY_ID:
            return { ...state, serviceEditItem: action.service[0] }

        default: return { ...state }
    }
}

export default serviceEditItem;