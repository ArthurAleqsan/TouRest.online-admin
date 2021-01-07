import * as types from './../types';

export const set = (dispatch, type, key) => {
    dispatch({
        type: types[type],
        [key]: null
    })
}
export const setValue = (dispatch, type, key, value,) => {
    dispatch({
        type: types[type],
        key,
        value,
    });
}