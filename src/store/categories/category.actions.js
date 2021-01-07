import { message } from 'antd';
import CategoriesService from '../../services/CategoriesService';
import * as types from './../types';
import {updateInArray} from './../../util/helpers';

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
                dispatch({
                    type: types.SET_CATEGORY,
                    category
                });
            } else {
                message.error(category.message);
            }
        })
}
export const getCategoryById = (dispatch, id) => {
    CategoriesService.getCategoryById(id)
        .then(res => {
            const { status, json: category } = res;
            if (CategoriesService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_CATEGORY,
                    category
                })
            } else {
                message.error(category.message);
            }
        })
}
export const editCategory = (dispatch, getState, id, data) => {
    const newData = data;
    delete newData.id;
    CategoriesService.editCategory(id, newData)
        .then(res => {
            const { status, json: category } = res;
            if (CategoriesService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_CATEGORY,
                    category
                });
                const { categories } = getState().categories;
                const newCategories = updateInArray(categories, category => category.id == id, category);
                dispatch({
                    type: types.SET_CATEGORIES,
                    categories: newCategories
                });
            } else {
                message.error(category.message);
            }
        })
}
