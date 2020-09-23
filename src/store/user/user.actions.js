import * as types from './../types';

export const setUser = (dispatch, user) => {
    dispatch({
        types: types.SET_USER,
        user,
    });
};