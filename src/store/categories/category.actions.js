import { message } from 'antd';
import CategoriesService from '../../services/CategoriesService';
import * as types from './../types';

export const getCategories = (dispatch) => {
    CategoriesService.getCategories()
        .then(res => {
            const { status, json: categories } = res;
            if (CategoriesService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_CATEGORIES,
                    categories
                });
            } else {
                message.error(categories.message);
            }
        })
}
export const createCategory = (dispatch, getState, category) => {
    CategoriesService.createCategory(category)
        .then(res => {
            const { status, json: category } = res;
            if (CategoriesService.isOkStatus(status)) {
                const { categories } = getState().categories;
                dispatch({
                    type: types.SET_CATEGORIES,
                    categories: [categories, category]
                });
            } else {
                message.error(category.message);
            }
        })
}