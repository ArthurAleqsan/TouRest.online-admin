import React from 'react';
import { Row, Col, Divider, Spin, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Table from './Table';

const BlogTable = () => {
    const { blogs } = useSelector(s => s.blog);
    const history = useHistory();
    const handleRedirect = () => {
        history.push('/blog/create');
    }
    const handleRedirectToEdit = (id) => {
        history.push(`/blog/edit/id=${id}`);
    }
    return (
        <>
            <Divider orientation="left">Blog posts</Divider>
            {blogs && blogs.length == 0 ? <Row>
                <Col className="gutter-row" span={6}>
                    <div>Do not have Blog posts</div>
                </Col>
            </Row> : <Row key={0}>
                    <Col className="gutter-row" span={3}>
                        <div>Image</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div>Title</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div>Название</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>Description</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div>Описание</div>
                    </Col>
                    <Col className="gutter-row" />
                </Row>}
            {blogs ? blogs.map(blog => {
                return <Row key={blog.id}>
                    <Table
                        data={blog}
                        cols={[{
                            key: 'urls[0]',
                            sp: 3
                        },
                        {
                            key: 'en_title',
                            sp: 4
                        },
                        {
                            key: 'ru_title',
                            sp: 4
                        },
                        {
                            key: 'en_description',
                            sp: 5
                        }, {
                            key: 'ru_description',
                            sp: 5
                        }]}
                        path='blogs'
                    />
                </Row>
            }) : <Spin />}
            <div className='button'>
                <Button type='primary' onClick={handleRedirect}>Create Blog post</Button>
            </div>
        </>
    )
};

export default BlogTable;
