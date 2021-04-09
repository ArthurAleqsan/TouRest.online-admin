import React, { useState } from 'react';
import { Button, Divider, message } from 'antd';
import { useDispatch, useStore } from 'react-redux';

import InputGroup from '../../../components/simple-components/InputGroup';
import { createManager } from '../../../store/user/user.actions';
import { isValidObject } from '../../../util/helpers';

const CreateUser = () => {
    const dispatch = useDispatch();
    const { getState } = useStore();
    const [userFields, setUserFields] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        phone: '',
    });
    const handleInputGroupChange = e => {
        const { name, value } = e.target
        setUserFields({ ...userFields, [name]: value });
    }
    const handleCreate = () => {
        if (userFields.password !== userFields.confirmPassword) {
            return message.error('Password and confirm password must be mutch!');
        }
        if (isValidObject(userFields)) {
            const data = { ...userFields };
            delete data.confirmPassword;
            createManager(dispatch, getState, data);
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
        <div className='create-user-container'>
            <div className='create-elem'>
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
            </div>
            <div className='create-elem'>
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
            </div>
            <div className='create-elem'>
                <InputGroup
                    label='Email'
                    name='email'
                    handleChange={handleInputGroupChange}
                    value={userFields.email}
                    type='email'
                />
                <InputGroup
                    label='Phone'
                    name='phone'
                    handleChange={handleInputGroupChange}
                    value={userFields.phone}
                    type='phone'
                />
            </div>
            {/* <div className='input-group'>
                <span>City</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select category city"
                    onChange={handleSelect}
                >
                    {ROLES}
                </Select>
            </div> */}
            <Divider />
            <div className='buttons-container'>
                <Button onClick={resetData} >Reset</Button>
                <Button type="primary" onClick={handleCreate} >Submit</Button>
            </div>
        </div>
    )
};

export default CreateUser;
