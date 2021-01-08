import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Table from './Table';


const CategoriesTable = () => {
    const { categories } = useSelector(s => s.categories);
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/categories/create');
    }
    const handleRedirectToEdit = (id) => {
        history.push(`/categories/edit/id=${id}`);
    }
    return (
        <>
            <Divider orientation="left">Categories</Divider>
            {categories && categories.length == 0 ? <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have categories</div>
                </Col>
            </Row> : <Row key={0}>
                    <Col className="gutter-row" span={5}>
                        <div>Image</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>City</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>Name</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>Названия</div>
                    </Col>
                    <Col className="gutter-row" />
                </Row>}
            {categories ? categories.map(category => {
                return <Row key={category.id}>
                    <Table 
                        data = {category}
                        cols = {[{
                            key: 'url',
                            sp: 5
                        },
                        {
                            key: 'city',
                            sp: 5
                        },
                        {
                            key: 'en_name',
                            sp: 5
                        },
                        {
                            key: 'ru_name',
                            sp: 5
                        }]}
                        path = 'categories'
                    />
                </Row>
            }) : <Spin />}
            <Divider />
            <Button type='primary' onClick={handleRedirect}>Create category</Button>
        </>
    )
};

export default CategoriesTable;
