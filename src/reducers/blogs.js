
import * as Types from './../constants/ActionTypes'
var initialState = [];

const blogs = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_BLOGS:
            state = action.blogs;
            return [...state]
        default: return [...state]
    }
}

export default blogs;