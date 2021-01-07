import React, { useState } from 'react';
import { Button, Divider, Select, Upload, message } from 'antd';

import InputGroup from '../../../components/simple-components/InputGroup';
import { CONFIG } from '../../../util/config';
import { isValidObject } from '../../../util/helpers';
import { createCategory } from '../../../store/categories/category.actions';
import { useDispatch, useStore } from 'react-redux';

const { category_schema, cities } = CONFIG;
const { Option } = Select;

const CITIES = cities.map(city => <Option key={city}>{city}</Option>);

const CreateCategory = () => {
    const dispatch = useDispatch();
    const { getState } = useStore();
    const [categoryValues, setCategoryValues] = useState(category_schema);

    const handleCreate = () => {
        if (isValidObject(categoryValues)) {
            createCategory(dispatch, getState, categoryValues);
        } else {
            message.error('Please fill all required filds');
        }
    }
    const resetData = () => {
        setCategoryValues(category_schema);
    }
    const handleInputGroupChange = e => {
        const { name, value } = e.target
        setCategoryValues({ ...categoryValues, [name]: value });
    }
    const handleSelect = (city) => {
        setCategoryValues({ ...categoryValues, city });
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
                setCategoryValues({ ...categoryValues, url: info.file.response[0] })
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
                    placeholder="Please select tour city"
                    onChange={handleSelect}
                >
                    {CITIES}
                </Select>
            </div>
            <InputGroup
                name='en_name'
                label='Category name'
                value={categoryValues.en_name}
                handleChange={handleInputGroupChange}
            />
            <InputGroup
                name='ru_name'
                label='Названия категория'
                value={categoryValues.ru_name}
                handleChange={handleInputGroupChange}
            />
            <Upload {...props} multiple={false}>
                <Button type="primary" >Click to Upload</Button>
            </Upload>
            {categoryValues.url && <img src={categoryValues.url} />}
            <Divider />
            <Button onClick={resetData} >Reset</Button>
            <Button type="primary" onClick={handleCreate} >Submit</Button>
        </div>
    )
};

export default CreateCategory;
