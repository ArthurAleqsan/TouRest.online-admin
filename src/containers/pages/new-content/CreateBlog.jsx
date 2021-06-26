import React, { useEffect, useState } from 'react';
import { Button, message, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getParam } from '../../../util/helpers';
import InputGroup from '../../../components/simple-components/InputGroup';

import { isValidObject } from '../../../util/helpers';
import { createBlog, editBlog, getBlogById } from '../../../store/blog/blog.actions';
import { setValue } from '../../../store/global/global.actions';

const CreateBlog = () => {
    const dispatch = useDispatch();
    const { getState } = useStore();
    const { blog } = useSelector(s => s.blog);
    const [editableId, setEditableId] = useState('');
    useEffect(() => {
        if (location.pathname.includes('edit')) {
            const id = getParam(location.pathname, 'id=', 1);
            getBlogById(dispatch, id);
            setEditableId(id);
        }
    }, []);
    const handleInputGroupChange = e => {
        const { name, value } = e.target
        setValue(dispatch, 'SET_BLOG_VALUE', [name], value);

    }
    const handleCreate = () => {
        if (isValidObject(blog)) {
            editableId ? editBlog(dispatch, getState, editableId, blog) : createBlog(dispatch, getState, blog);
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
                setValue(dispatch, 'SET_BLOG_VALUE', 'urls', [...blog.urls, info.file.response[0]])
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const resetData = () => {

    }
    return (
        <div className='create-tour '>
            <InputGroup
                label='Title'
                name='en_title'
                handleChange={handleInputGroupChange}
                value={blog.en_title}
            />
            <InputGroup
                label='Назване'
                name='ru_title'
                handleChange={handleInputGroupChange}
                value={blog.ru_title}
            />
            <InputGroup
                label='Description'
                name='en_description'
                handleChange={handleInputGroupChange}
                value={blog.en_description}
                textArea
            />
            <InputGroup
                label='Описание'
                name='ru_description'
                handleChange={handleInputGroupChange}
                value={blog.ru_description}
                textArea
            />
            <div className='picture-upload'>
                <div className='label'>Upload</div>
                <Upload {...props} listType='picture-card'>
                    <PlusOutlined />

                </Upload>
            </div>
            <div className='buttons-container'>
                <Button onClick={resetData} >Reset</Button>
                <Button type="primary" onClick={handleCreate} >Submit</Button>
            </div>
        </div>
    )
};

export default CreateBlog;
