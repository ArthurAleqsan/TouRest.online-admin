import React, { useState } from 'react';
import { Button, message, Upload } from 'antd';
import { useDispatch, useStore } from 'react-redux';
import InputGroup from '../../../components/simple-components/InputGroup';

import { isValidObject } from '../../../util/helpers';
import { createBlog } from '../../../store/blog/blog.actions';

const CreateBlog = () => {
    const dispatch = useDispatch();
    const { getState } = useStore();
    const [blogFields, setBlogFields] = useState({
        en_title: '',
        ru_title: '',
        en_description: '',
        ru_description: '',
        urls: [],
    });
    const handleInputGroupChange = e => {
        const { name, value } = e.target
        setBlogFields({ ...blogFields, [name]: value });
    }
    const handleCreate = () => {
        if (isValidObject(blogFields)) {
            const data = { ...blogFields };
            delete data.confirmPassword;
            createBlog(dispatch, getState, data);
        } else {
            message.error('Please fill all required filds');
        }
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
                setBlogFields({ ...blogFields, urls: [...blogFields.urls, info.file.response[0]] });
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const resetData = () => {
        const temp = {};
        for (const key in blogFields) {
            temp[key] = '';
        }
        temp.urls = [];
        setBlogFields(temp);
    }
    return (
        <div>
            <InputGroup
                label='Title'
                name='en_title'
                handleChange={handleInputGroupChange}
                value={blogFields.en_title}
            />
            <InputGroup
                label='Назване'
                name='ru_title'
                handleChange={handleInputGroupChange}
                value={blogFields.ru_title}
            />
            <InputGroup
                label='Description'
                name='en_description'
                handleChange={handleInputGroupChange}
                value={blogFields.en_description}
                textarea
            />
            <InputGroup
                label='Описание'
                name='ru_description'
                handleChange={handleInputGroupChange}
                value={blogFields.ru_description}
                textarea
            />
            <Upload {...props}>
                Upload
            </Upload>
            <div className='buttons-container'>
                <Button onClick={resetData} >Reset</Button>
                <Button type="primary" onClick={handleCreate} >Submit</Button>
            </div>
        </div>
    )
};

export default CreateBlog;
