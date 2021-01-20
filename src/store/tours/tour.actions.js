import { message } from 'antd';
import ToursService from '../../services/ToursService';
import * as types from './../types';

export const getTours = (dispatch) => {
    ToursService.getTours()
        .then(res => {
            const { status, json: tours } = res;
            if (ToursService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_TOURS,
                    tours
                })
            } else {
                message.error(res.json.message)
            }
        })
}
export const createTour = (dispatch, getState, data) => {
    ToursService.createTour(data)
    .then(res => console.log(res))
}
