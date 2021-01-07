import React, { useEffect, useState } from 'react';
import { Button, Divider, Select, Upload, message } from 'antd';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import InputGroup from '../../../components/simple-components/InputGroup';
import { CONFIG } from '../../../util/config';
import { getParam } from '../../../util/helpers';
import { isValidObject } from '../../../util/helpers';
import { createCategory, getCategoryById, editCategory } from '../../../store/categories/category.actions';
import { setValue, set } from '../../../store/global/global.actions';

const { category_schema, cities } = CONFIG;
const { Option } = Select;

const CITIES = cities.map(city => <Option key={city}>{city}</Option>);

const CreateCategory = () => {
    const dispatch = useDispatch();
    const { getState } = useStore();
    const [editableId, setEditableId] = useState('');
    const location = useLocation();
    const { category } = useSelector(s => s.categories);

    useEffect(() => {
        if (location.pathname.includes('edit')) {
            const id = getParam(location.pathname, 'id=', 1);
            getCategoryById(dispatch, id);
            setEditableId(id);
        }
    }, []);
    const handleCreate = () => {
        if (isValidObject(category)) {
            editableId ? editCategory(dispatch, getState, editableId, category) : createCategory(dispatch, getState, category);
        } else {
            message.error('Please fill all required filds');
        }
    }
    const resetData = () => {
        // set(dispatch, 'SET_CATEGORY', category_schema);
    }
    const handleInputGroupChange = e => {
        const { name, value } = e.target;
        setValue(dispatch, 'SET_CATEGORY_VALUE', [name], value);
    }
    const handleSelect = (city) => {
        setValue(dispatch, 'SET_CATEGORY_VALUE', 'city', city);
    }
    const props = {
        name: 'file',
        action: '/v1/media/upload',
        headers: {
            'Cache-Control': 'no-cache',
            "authorization": `Bearer ${localStorage.getItem('token')}`,
        },
        onChange(info) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                setValue(dispatch, 'SET_CATEGORY_VALUE', 'url', info.file.response[0])
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div>
            <div className='input-group'>
                <span>City</span>
                <Select
                    style={{ width: '100%' }}
                    placeholder="Please select category city"
                    onChange={handleSelect}
                    // defaultValue = {category.city}
                >
                    {CITIES}
                </Select>
            </div>
            <InputGroup
                name='en_name'
                label='Category name'
                value={category.en_name}
                handleChange={handleInputGroupChange}
            />
            <InputGroup
                name='ru_name'
                label='Названия категория'
                value={category.ru_name}
                handleChange={handleInputGroupChange}
            />
            <Upload {...props} multiple={false}>
                <Button type="primary" >Click to Upload</Button>
            </Upload>
            {category.url && <img src={category.url} />}
            <Divider />
            <Button onClick={resetData} >Reset</Button>
            <Button type="primary" onClick={handleCreate} >Submit</Button>
        </div>
    )
};

export default CreateCategory;
