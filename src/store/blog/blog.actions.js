import { message } from 'antd';
import BlogsService from '../../services/BlogsService';
import * as types from './../types';

export const getBlogs = (dispatch) => {
    BlogsService.getBlogs()
        .then(res => {
            const { status, json: blogs } = res;
            if (BlogsService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_BLOGS,
                    blogs,
                });
            } else {
                message.error(blogs.message);
            }
        })
}
export const createBlog = (dispatch, getState, data) => {
    BlogsService.createBlog(data)
        .then(res => {
            const { status, json: blog } = res;
            const { blogs } = getState().blog;
            if (BlogsService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_BLOGS,
                    blogs: blogs ? [...blogs, blog] : [blog]
                });
            } else {
                message.error(blogs.message);
            }
        })
}