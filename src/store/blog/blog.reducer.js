import * as types from './../types';
import { CONFIG } from '../../util/config';
const { blog_schema } = CONFIG;

const initialState = {
    blogs: null,
    blog: { blog_schema }
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_BLOGS:
            return {
                ...state,
                blogs: action.blogs,
            }
            case types.SET_BLOG:
                return {
                    ...state,
                    blog: action.blog
                }
        default:
            return state
    }
}
export default blogReducer;
