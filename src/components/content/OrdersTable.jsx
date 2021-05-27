import React, { useState } from 'react';
import { Row, Col, Divider, Spin, Button, Image, Modal } from 'antd';
import {useSelector} from "react-redux";
import moment from "moment";
import {dateFormat} from "../../../../TouRest.online-front/src/util/config";


const OrdersTable = () => {
    const { orders } = useSelector(state => state.orders);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tickets, setTickets] = useState();
   
    const handleRedirectToView = (id) => {
      setIsModalVisible(true);
      const order = orders.filter((order) =>  order.id === id);
      setTickets(order[0]['tickets']);
    }
  
    return(
        <div className='table-container'>
            <Modal title="Order Tickets" 
                   visible={isModalVisible}
                   width={768}
                   footer={null}
                   onCancel={() => setIsModalVisible(false)}>
                <div className='table-container'>
                    <Row className='table-header'>
                        <Col span={4}>Image</Col>
                        <Col span={6}>TourName</Col>
                        <Col span={3}>Adults C.</Col>
                        <Col span={3}>Childs C.</Col>
                        <Col span={2}>Price</Col>
                        <Col span={3}>StartDate</Col>
                        <Col span={3}>EndDate</Col>
                    </Row>
                    {tickets ? tickets.map(ticket => {
                        return <Row key={ticket.id} className='table-content'>
                            <Col span={4}><Image height={100} src={ticket?.tour?.images[0]} alt=""/> </Col>
                            <Col span={6}>{ticket?.tour?.en_name} </Col>
                            <Col span={3}>{ticket.adultsCount}</Col>
                            <Col span={3}>{ticket.childsCount}</Col>
                            <Col span={2}>{ticket.totalPrice}$</Col>
                            <Col span={3}>{moment(ticket.startDate).format(dateFormat)}</Col>
                            <Col span={3}>{moment(ticket.endDate).format(dateFormat)}</Col>
                        </Row>
                    }) : <Spin />}
                </div>
            </Modal>
            <Divider orientation="left" className='page-header'>Orders</Divider>
            <Divider />

            {orders && orders.length === 0 && <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have orders</div>
                </Col>
            </Row>}
            <Row className='table-header'>
                <Col span={3}>FirstName</Col>
                <Col span={3}>LastName</Col>
                <Col span={4}>Email</Col>
                <Col span={3}>Hotel</Col>
                <Col span={2}>Price</Col>
                <Col span={3}>StartDate</Col>
                <Col span={3}>EndDate</Col>
            </Row>
            {orders ? orders.map(order => {
                return <Row key={order.id} className='table-content'>
                    <Col span={3}>{order.user.firstName}</Col>
                    <Col span={3}>{order.user.lastName} </Col>
                    <Col span={4}>{order.user.email}</Col>
                    <Col span={3}>{order.hotel}</Col>
                    <Col span={2}>{order.totalPrice}$</Col>
                    <Col span={3}>{moment(order.startDate).format(dateFormat)}</Col>
                    <Col span={3}>{moment(order.endDate).format(dateFormat)}</Col>
                    <Col span={3}>
                        <div className='btns-container'>
                            <Button type='primary' className='button'  onClick={() => handleRedirectToView(order.id)}>View More</Button>
                        </div>
                    </Col >
                </Row>
            }) : <Spin />}
        </div>)
}
export default OrdersTable