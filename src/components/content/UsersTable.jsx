import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Table from './Table';

const UsersTable = () => {
    const { users } = useSelector(s => s.user);
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/users/create');
    }
    const handleRedirectToEdit = (id) => {
        history.push(`/users/edit/id=${id}`);
    }
    return (
        <>
            <Divider orientation="left">Users</Divider>
            {users && users.length == 0 ? <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have Users</div>
                </Col>
            </Row> : <Row key={0}>
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
            {users ? users.map(user => {
                return <Row key={user.id}>
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
                        path = 'users'
                    />
                </Row>
            }) : <Spin />}
            <Divider />
            <Button type='primary' onClick={handleRedirect}>Create User</Button>
        </>
    )
};

export default UsersTable;
