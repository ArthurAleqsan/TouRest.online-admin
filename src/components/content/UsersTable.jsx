import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import PropType from 'prop-types';
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
        <>
            <Divider orientation="left">{isManagers ? 'Managers' : 'Users'}</Divider>
            {data && data.length == 0 ? <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have {isManagers ? 'Managers' : 'Users'}</div>
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
            {data ? data.map(user => {
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
                        path={isManagers ? 'managers' : 'users'}
                    />
                </Row>
            }) : <Spin />}
            <Divider />
            {isManagers && <Button type='primary' onClick={handleRedirect}>Create Manager</Button>}
        </>
    )
};

UsersTable.propTypes = {
    isManagers: PropType.bool,
}

export default UsersTable;
