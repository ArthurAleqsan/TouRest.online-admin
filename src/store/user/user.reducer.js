import * as types from './../types';

const initialState = {
    users: null,
    user: localStorage.user ? JSON.parse(localStorage.getItem('user')) : null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case types.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
export default userReducer;
