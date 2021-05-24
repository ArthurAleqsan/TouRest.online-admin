import * as types from '../types';

const initialState = {
    tours: null,
};

const toursReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TOURS:
            return {
                ...state,
                tours: action.tours
            };
        case types.SET_TOUR:
            return {
                ...state,
                tour: action.tour
            }
        default:
            return state
    }
}
export default toursReducer;
