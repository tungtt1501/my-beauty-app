import * as Types from './../constants/ActionTypes'
var initialState = {};

const serviceDetailEditItem = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SERVICE_DETAIL_BY_ID:
            state = action.serviceDetail[0];
            return { ...state }

        case Types.RESET_SERVICES_DETAIL:
            state = null;
            return { ...state }

        default: return { ...state }
    }
}

export default serviceDetailEditItem;