import { message } from 'antd';
import ToursService from '../../services/ToursService';
import { removeFromArray, updateInArray } from '../../util/helpers';
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
        .then(res => {
            const { status, json } = res;
            if (ToursService.isOkStatus(status)) {
                const { tours } = getState().tours;
                location.reload();
                dispatch({
                    type: types.SET_TOURS,
                    tours: tours ? [json, ...tours] : [json]
                })
            } else {
                message.error(res.json.message)
            }
        })
}

export const editTour = (dispatch, getState, data, id) => {
    ToursService.updateTourById(id, data)
        .then(res => {
            const { status, json } = res;
            if (ToursService.isOkStatus(status)) {
                const { tours } = getState().tours;
                const _newTours = updateInArray(tours, t => t.id == id, () => json);
                dispatch({
                    type: types.SET_TOURS,
                    tours: _newTours
                })
            }
        })
}

export const removeTour = (dispatch, getState, id) => {
    ToursService.removeTour(id)
        .then(res => {
            if (ToursService.isOkStatus(res.status)) {
                const { tours } = getState().tours;
                const _newTours = removeFromArray(tours, t => t.id == id);
                dispatch({
                    type: types.SET_TOURS,
                    tours: _newTours
                })
            }
        })
}
export const getTourById = (dispatch, id) => {
    ToursService.getTourById(id)
        .then(res => {
            const { status, json: tour } = res;
            if (ToursService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_TOUR,
                    tour
                })
            } else {
                message.error(tour.message);
            }
        })
}