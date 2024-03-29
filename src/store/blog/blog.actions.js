import { message } from 'antd';
import BlogsService from '../../services/BlogsService';
import { updateInArray, removeFromArray } from '../../util/helpers';
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
export const getBlogById = (dispatch, id) => {
    BlogsService.getBlogById(id)
        .then(res => {
            const { status, json: blog } = res;
            if (BlogsService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_BLOG,
                    blog,
                });
            } else {
                message.error(blog.message);
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
export const editBlog = (dispatch, getState, id, data) => {
    const newData = data;
    console.log(data)
    delete newData.id;
    BlogsService.editBlog(id, newData)
        .then(res => {
            const { status, json: blog } = res;
            if (BlogsService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_BLOG,
                    blog,
                });
                const { blogs } = getState().blog;
                const newBlogs = updateInArray(blogs, blog => blog.id == id, blog);
                dispatch({
                    type: types.SET_BLOGS,
                    blogs: newBlogs,
                });
            } else {
                message.error(blog.message);
            }
        })
}
export const removeBlog = (dispatch, getState, id) => {
    BlogsService.removeBlog(id)
        .then(res => {
            const { status, json } = res;
            if (BlogsService.isOkStatus(status)) {
                const { blogs } = getState().blog;
                const newBlogs = removeFromArray(blogs, blog => blog.id == id);
                dispatch({
                    type: types.SET_BLOGS,
                    blogs: newBlogs
                })

            } else {
                message.error(json.message);
            }
        })
}