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