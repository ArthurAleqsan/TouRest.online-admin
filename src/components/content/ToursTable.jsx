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
            {tours ? tours.map(tour => {
                return <Row key={tour.id}>
                    <Col className="gutter-row" span={6}>
                        <div>col-6</div>
                    </Col>
                </Row>
            }) : <Spin />}
            <Divider />
            <Button type = 'primary' onClick = {handleRedirect}>Create Tour</Button>
        </>
    )
};

ToursTable.propTypes = {

};

export default ToursTable;
