import Request from './Request';


class CategoriesService extends Request {
    constructor() {
        super('/categories');
    }

    createCategory(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        return this.send({
            path: '/', options,
        }).then(({ json, status }) => ({ json, status }));
    }

    getCategories() {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: '/', options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getCategoryById(id) {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    editCategory(id, data) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(data)
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    removeCategory(id) {
        const options = {
            method: 'DELETE',
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
}

export default new CategoriesService();