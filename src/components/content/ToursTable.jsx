import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from "react-router-dom";
import { removeTour } from '../../store/tours/tour.actions';

const ToursTable = () => {
    const { tours } = useSelector(s => s.tours);
    const dispatch = useDispatch();
    const { getState } = useStore();
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/tours/create');
    }
    const handleRedirectToEdit = (id) => {
        history.push(`/tours/edit/id=${id}`);
    }
    const handleRemove = id => {
        removeTour(dispatch, getState, id);
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
                <Col span={3}>Name</Col>
                <Col span={3}>Manager</Col>
                <Col span={3}>Rate</Col>
                <Col span={3}>Adults price</Col>
                <Col span={3}>Child price</Col>
            </Row>
            {tours ? tours.map(tour => {
                return <Row key={tour.id} className='table-content'>
                    <Col span={6} >
                        <div className='img-container'>
                            <img src={tour.images[0]} />
                        </div>
                    </Col>
                    <Col span={3}>{tour.en_name}</Col>
                    <Col span={3}>{tour.manager.firstName} {tour.manager.lastName}</Col>
                    <Col span={3}>{tour.rate}</Col>
                    <Col span={3}>{tour.priceForAdults}</Col>
                    <Col span={3}>{tour.priceForChildren}</Col>
                    <Col span={3}>
                        <div className='btns-container'>
                            <Button type='primary' className='button' onClick={() => handleRedirectToEdit(tour.id)}>Edit</Button>
                            <Button type='danger' onClick={() => handleRemove(tour.id)}>Remove</Button>
                        </div>
                    </Col >
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
