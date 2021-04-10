import React, { useState } from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useHistory } from "react-router-dom";
import Table from './Table';
import RemoveLogOutPopUp from '../popups/RemoveLogOutPopUp';
import { removeCategory } from './../../store/categories/category.actions';

const CategoriesTable = () => {
    const { categories } = useSelector(s => s.categories);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const { getState } = useStore();
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/categories/create');
    };
    const handleRemove = (id) => {
        removeCategory(dispatch, getState, id);
        setVisible(false);
    };
    const handleRedirectToEdit = (id) => {
        history.push(`/categories/edit/id=${id}`);
    };
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
                        handleRmove={() => setVisible(true)}
                    />
                    <RemoveLogOutPopUp
                        visible={visible}
                        setVisible={setVisible}
                        handleSubmit={() => handleRemove(category.id)}
                        handleCancel={() => setVisible(false)}
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
