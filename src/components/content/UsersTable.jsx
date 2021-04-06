import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import Table from './Table';

const UsersTable = ({ isManagers }) => {
    const { users, managers } = useSelector(s => s.user);
    const history = useHistory();
    const data = isManagers ? managers : users;

    const handleRedirect = () => {
        history.push('/users/create');
    }
    const handleRedirectToEdit = (id) => {
        history.push(`/users/edit/id=${id}`);
    }
    return (
        <div className='table-container'>
            <Divider orientation="left" className='page-header'>Users</Divider>
            {data && data.length == 0 ? <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have Users</div>
                </Col>
            </Row> : <Row key={0} className='table-header'>
                    <Col className="gutter-row" span={5}>
                        <div>First Name</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>Last Name</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>Email</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>Role</div>
                    </Col>
                    <Col className="gutter-row" />
                </Row>}
            {data ? data.map(user => {
                return <Row key={user.id} className='table-content'>
                    <Table
                        data={user}
                        cols={[{
                            key: 'firstName',
                            sp: 5
                        },
                        {
                            key: 'lastName',
                            sp: 5
                        },
                        {
                            key: 'email',
                            sp: 5
                        },
                        {
                            key: 'role',
                            sp: 5
                        }]}
                        path='users'
                    />
                </Row>
            }) : <Spin />}
            <div className='button'>
                <Button type='primary' onClick={handleRedirect}>Create User</Button>
            </div>
        </div>
    )
};

export default UsersTable;
