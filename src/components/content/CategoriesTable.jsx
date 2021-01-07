import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


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
                    <Col className="gutter-row" span={5}>
                        <div>
                            <img src={category.url} />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>
                            <span>{category.city}</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>
                            <span>{category.en_name}</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>
                            <span>{category.ru_name}</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" >
                        <div>
                            <span onClick = {() => handleRedirectToEdit(category.id)}>edit</span>
                            <span>remove</span>
                        </div>
                    </Col>
                </Row>
            }) : <Spin />}
            <Divider />
            <Button type='primary' onClick={handleRedirect}>Create category</Button>
        </>
    )
};

export default CategoriesTable;
