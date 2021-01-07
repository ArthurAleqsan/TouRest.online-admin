import * as types from './../types';

export const reset = (dispatch, type, key) => {
    dispatch({
        type: types[type],
        [key]: null
    })
}