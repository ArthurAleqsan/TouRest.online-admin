import * as types from './../types';

const initialState = {
    categories: null,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        default:
            return state
    }
}

export default categoryReducer;