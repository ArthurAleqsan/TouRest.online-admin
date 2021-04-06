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
        <div className='table-container'>
            <Divider orientation="left" className='page-header'>Categories</Divider>
            {categories && categories.length == 0 ? <Row >
                <Col className="gutter-row" span={6}>
                    <div>Do not have categories</div>
                </Col>
            </Row> : <Row key={0} className='table-header'>
                    <Col className="gutter-row" span={6}>
                        <div>Image</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
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
                return <Row key={category.id} className='table-content'>
                    <Table
                        data={category}
                        cols={[{
                            key: 'url',
                            sp: 6,
                        },
                        {
                            key: 'city',
                            sp: 4
                        },
                        {
                            key: 'en_name',
                            sp: 5
                        },
                        {
                            key: 'ru_name',
                            sp: 5
                        }]}
                        path='categories'
                    />
                </Row>
            }) : <Spin />}
            <div className='button' >
                <Button type='primary' onClick={handleRedirect}>Create category</Button>
            </div>
        </div>
    )
};

export default CategoriesTable;
