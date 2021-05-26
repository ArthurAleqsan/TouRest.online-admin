import React, {useEffect} from 'react';
import OrdersTable from "../../../components/content/OrdersTable";
import {useDispatch} from "react-redux";
import {getOrders} from "../../../store/orders/order.actions";

const Orders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getOrders(dispatch)
    })
    return (
        <div>
            <OrdersTable/>
        </div>
    )
};

export default Orders;