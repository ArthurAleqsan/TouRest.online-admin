import * as types from './../types';

const initialState = {
    blogs: null,
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_BLOGS:
            return {
                ...state,
                users: action.users,
            }
        default:
            return state
    }
}
export default blogReducer;
