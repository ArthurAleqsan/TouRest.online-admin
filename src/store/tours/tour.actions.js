import ToursService from '../../services/ToursService';
import * as types from './../types';

export const getTours = () => {
    ToursService.getTours()
    .then(res =>console.log(res) )
}