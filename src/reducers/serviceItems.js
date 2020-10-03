import * as Types from './../constants/ActionTypes'
var initialState = [];

var findIndex = (serviceItems, serviceItemId) => {
    var result = -1;
    serviceItems.forEach((serviceItem, index) => {
        if (serviceItem.serviceItemId === serviceItemId) {
            result = index;
        }
    });
    return result;
}

const services = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_ALL_SERVICE_ITEMS:
            state = action.serviceItems;

            return [...state]
        case Types.ADD_SERVICE_DETAIL:
            state.push(action.serviceDetail);
            return [...state];

        case Types.DELETE_SERVICE_DETAIL:
            if (action.id) {
                index = findIndex(state, action.id);
                state.splice(index, 1);
            }

            return [...state];
        default: return [...state]
    }
}

export default services;