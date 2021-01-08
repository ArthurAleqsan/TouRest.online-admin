import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UsersTable from '../../../components/content/UsersTable';
import { getUsers } from '../../../store/user/user.actions';

const Users = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUsers(dispatch);
    }, [])
    return (
        <div className='users-container'>
            <UsersTable />
        </div>
    )
};

export default Users;