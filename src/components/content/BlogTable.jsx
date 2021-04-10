import React, { useState } from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import RemoveLogOutPopUp from './../popups/RemoveLogOutPopUp';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useHistory } from "react-router-dom";
import { removeBlog } from '../../store/blog/blog.actions';

const BlogTable = () => {
    const { blogs } = useSelector(s => s.blog);
    const [visible, setVisible] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const { getState } = useStore();
    const handleRedirect = () => {
        history.push('/blog/create');
    }
    const handleRedirectToEdit = (id) => {
        history.push(`/blog/edit/id=${id}`);
    }
    const handleRemove = (id) => {
        removeBlog(dispatch, getState, id);
        setVisible(false);

    }
    return (
        <div className='table-container'>
            <Divider orientation="left" className='page-header'>Blog posts</Divider>
            {blogs && blogs.length == 0 ? <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have Blog posts</div>
                </Col>
            </Row> : <Row key={0} className='table-header'>
                    <Col span={3}>
                        <div>Image</div>
                    </Col>
                    <Col span={4}>
                        <div>Title</div>
                    </Col>
                    <Col span={4}>
                        <div>Название</div>
                    </Col>
                    <Col span={5}>
                        <div>Description</div>
                    </Col>
                    <Col span={5}>
                        <div>Описание</div>
                    </Col>
                    <Col />
                </Row>}
            {blogs ? blogs.map(blog => {
                return <Row key={blog.id} className='table-content'>
                    <Col span={5} >
                        <div className='img-container'>
                            <img src={blog.urls[0]} />
                        </div>
                    </Col>
                    <Col span={3}>{blog.en_title}</Col>
                    <Col span={3}>{blog.ru_title}</Col>
                    <Col span={5}>{blog.en_description}</Col>
                    <Col span={5}>{blog.ru_description}</Col>
                    <Col span={3}>
                        <div className='btns-container'>
                            <Button type='primary' className='button' onClick={() => handleRedirectToEdit(blog.id)}>Edit</Button>
                            <Button type='danger' onClick={() => setVisible(true)}>Remove</Button>
                        </div>
                    </Col >
                    <RemoveLogOutPopUp
                        visible={visible}
                        setVisible={setVisible}
                        handleSubmit={() => handleRemove(blog.id)}
                        handleCancel={() => setVisible(false)}
                    />
                </Row>
            }) : <Spin />}
            <div className='button'>
                <Button type='primary' onClick={handleRedirect}>Create Blog post</Button>
            </div>
        </div>
    )
};

export default BlogTable;
