import * as types from '../types';

const initialState = {
    orders: null,
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        case types.SET_ORDER:
            return {
                ...state,
                order: action.order
            };
        default:
            return state
    }
}

export default ordersReducer;