import Request from './Request';


class BlogsService extends Request {
    constructor() {
        super('/blogs');
    }

    createBlog(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        return this.send({
            path: '/', options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getBlogs() {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: '/', options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getBlogById(id) {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    updateBlogById(id, data) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(data)
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    removeBlog(id) {
        const options = {
            method: 'DELETE',
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
}

export default new BlogsService();