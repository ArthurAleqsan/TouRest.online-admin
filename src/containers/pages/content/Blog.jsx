import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BlogTable from '../../../components/content/BlogTable';
import { getBlogs } from '../../../store/blog/blog.actions';

const Blog = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getBlogs(dispatch);
    }, []);
    return (
        <div className='blogs-container'>
            <BlogTable />
        </div>
    )
};

export default Blog;