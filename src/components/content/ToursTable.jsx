import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const ToursTable = () => {
    const { tours } = useSelector(s => s.tours);
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/tours/create');
    }
    return (
        <div className='table-container'>
            <Divider orientation="left" className='page-header'>Tours</Divider>
            {tours && tours.length == 0 && <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have tours</div>
                </Col>
            </Row>}
            <Row className='table-header'>
                <Col span={6}>Image</Col>
                <Col span={4}>Name</Col>
                <Col span={3}>Manager</Col>
                <Col span={3}>Rate</Col>
                <Col span={4}>Adults price</Col>
                <Col span={4}>Child price</Col>
            </Row>
            {tours ? tours.map(tour => {
                return <Row key={tour.id} className='table-content'>
                    <Col span={6}>
                        <img src={tour.images[0]} />
                    </Col>
                    <Col span={4}>{tour.en_name}</Col>
                    <Col span={3}>{tour.manager.firstName} {tour.manager.lastName}</Col>
                    <Col span={3}>{tour.rate}</Col>
                    <Col span={4}>{tour.priceForAdults}</Col>
                    <Col span={4}>{tour.priceForChildren}</Col>
                </Row>
            }) : <Spin />}
            <div className='button'>
                <Button type='primary' onClick={handleRedirect}>Create Tour</Button>
            </div>
        </div>
    )
};

ToursTable.propTypes = {

};

export default ToursTable;
