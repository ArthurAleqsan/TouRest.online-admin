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
        <>
            <Divider orientation="left">Tours</Divider>
            {tours && tours.length == 0 && <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have tours</div>
                </Col>
            </Row>}
            <Row>
                <Col span={4}>name</Col>
                <Col span={4}>Image</Col>
                <Col span={4}>Manager</Col>
                <Col span={4}>Rate</Col>
                <Col span={4}>Adults price</Col>
                <Col span={4}>Child price</Col>
            </Row>
            {tours ? tours.map(tour => {
                return <Row key={tour.id}>
                    <Col span={4}>{tour.en_name}</Col>
                    <Col span={4}>
                        <img src = {tour.images[0]} />
                    </Col>
                    <Col span={4}>{tour.manager.firstName} {tour.manager.lastName}</Col>
                    <Col span={4}>{tour.rate}</Col>
                    <Col span={4}>{tour.priceForAdults}</Col>
                    <Col span={4}>{tour.priceForChildren}</Col>
                </Row>
            }) : <Spin />}
            <Divider />
            <Button type='primary' onClick={handleRedirect}>Create Tour</Button>
        </>
    )
};

ToursTable.propTypes = {

};

export default ToursTable;
