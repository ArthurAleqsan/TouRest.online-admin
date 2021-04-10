import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropType from 'prop-types';
import UsersTable from '../../../components/content/UsersTable';
import { getManagers, getUsers } from '../../../store/user/user.actions';

const Users = ({ isManagers }) => {
    const dispatch = useDispatch();
    const { users, managers } = useSelector(s => s.user);
    useEffect(() => {
        if (isManagers && !managers) {
            getManagers(dispatch)
        } else if (!users) {
            getUsers(dispatch)
        }
    }, []);
    return (
        <div className='users-container'>
            <UsersTable isManagers={isManagers} />
        </div>
    )
};

Users.propTypes = {
    isManagers: PropType.bool,
}

export default Users;