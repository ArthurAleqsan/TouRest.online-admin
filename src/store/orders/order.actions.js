import OrderServices from "../../services/OrderServices";
import * as types from './../types';
import ToursService from "../../services/ToursService";
import {message} from "antd";

export const getOrders = (dispatch) => {
    OrderServices.getOrders()
        .then(res => {
            const { status, json: orders } = res;
            if (ToursService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_ORDERS,
                    orders
                })
            } else {
                message.error(res.json.message)
            }
        })
}