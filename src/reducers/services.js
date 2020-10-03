import * as Types from './../constants/ActionTypes'
var initialState = [];

var findIndex = (services, categoryId) => {
    var result = -1;
    services.forEach((service, index) => {
        if (service.categoryId === categoryId) {
            result = index;
        }
    });
    return result;
}

const services = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_SERVICES:
            state = action.services;
            return [...state]
        case Types.FETCH_SERVICE_ITEMS:
            var serviceItems = action.serviceItems;
            if (serviceItems.length > 0) {
                index = findIndex(state, serviceItems[0].categoryId);
                state[index].serviceItems = serviceItems;
            }
            
            return [...state]
        default: return [...state]
    }
}

export default services;