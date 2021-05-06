import Request from './Request';


class CategoriesService extends Request {
    
    constructor() {
        super('/categories');
    }

    getCategories() {
        return this.GET('/').then(({ json, status }) => ({ json, status }));
    }

    getCategoryById(id) {
        return this.GET(`/${id}`).then(({ json, status }) => ({ json, status }));
    }

    createCategory(data) {
        return this.POST('/', data).then(({ json, status }) => ({ json, status }));
    }
    
    editCategory(id, data) {
        return this.PUT(`/${id}`, data).then(({ json, status }) => ({ json, status }));
    }
    
    removeCategory(id) {
        return this.DELETE('/', id)
    }
}

export default new CategoriesService();