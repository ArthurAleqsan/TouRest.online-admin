import React, { useState } from 'react';
import { Button, message, Select } from 'antd';
import { useDispatch, useStore } from 'react-redux';

import InputGroup from '../../../components/simple-components/InputGroup';
import { createUser } from '../../../store/user/user.actions';
import { isValidObject } from '../../../util/helpers';
import { CONFIG } from '../../../util/config';


const { roles } = CONFIG;
const { Option } = Select;

const ROLES = roles.map(role => <Option key={role}>{role}</Option>)

const CreateUser = () => {
    const dispatch = useDispatch();
    const { getState } = useStore();
    const [userFields, setUserFields] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        role: '',
    });
    const handleInputGroupChange = e => {
        const { name, value } = e.target
        setUserFields({ ...userFields, [name]: value });
    }
    const handleSelect = (role) => {
        setUserFields({ ...userFields, role });
    }
    const handleCreate = () => {
        if (userFields.password !== userFields.confirmPassword) {
            return message.error('Password and confirm password must be mutch!');
        }
        if (isValidObject(userFields)) {
            const data = { ...userFields };
            delete data.confirmPassword;
            createUser(dispatch, getState, data);
        } else {
            message.error('Please fill all required filds');
        }
    }
    const resetData = () => {
        const temp = {};
        for (const key in userFields) {
            temp[key] = '';
        }
        setUserFields(temp);
    }
    return (
        <div>
            <InputGroup
                label='FirstName'
                name='firstName'
                handleChange={handleInputGroupChange}
                value={userFields.firstName}
            />
            <InputGroup
                label='LastName'
                name='lastName'
                handleChange={handleInputGroupChange}
                value={userFields.lastName}
            />
            <InputGroup
                label='Password'
                name='password'
                handleChange={handleInputGroupChange}
                value={userFields.password}
                type='password'
            />
            <InputGroup
                label='Confirm password'
                name='confirmPassword'
                handleChange={handleInputGroupChange}
                value={userFields.confirmPassword}
                type='password'
            />
            <InputGroup
                label='Email'
                name='email'
                handleChange={handleInputGroupChange}
                value={userFields.email}
                type='email'
            />
            <div className='input-group'>
                <span>City</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select category city"
                    onChange={handleSelect}
                >
                    {ROLES}
                </Select>
            </div>
            <Button onClick={resetData} >Reset</Button>
            <Button type="primary" onClick={handleCreate} >Submit</Button>
        </div>
    )
};

export default CreateUser;
