import { CONFIG } from '../../util/config';
import * as types from './../types';

const { category_schema } = CONFIG;

const initialState = {
    categories: null,
    city_categories: null,
    category: category_schema,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        case types.SET_CITY_CATEGORIES:
            return {
                ...state,
                city_categories: action.categories,
            }
        case types.SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case types.SET_CATEGORY_VALUE:
            return {
                ...state,
                category: {
                    ...state.category,
                    [action.key]: action.value
                }
            }
        default:
            return state
    }
}

export default categoryReducer;