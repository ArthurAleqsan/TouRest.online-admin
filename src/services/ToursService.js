import Request from './Request';


class ToursService extends Request {
    constructor() {
        super('/tours');
    }
    
    getTours() {
        return this.GET('/').then(({ json, status }) => ({ json, status }));
    }
    
    getTourById(id) {
        return this.GET(`/${id}`).then(({ json, status }) => ({ json, status }));
    }

    createTour(data) {
        return this.POST('/', data).then(({ json, status }) => ({ json, status }));
    }
    
    updateTourById(id, data) {
        return this.PUT(`/${id}`, data).then(({ json, status }) => ({ json, status }));
    }
    
    removeTour(id) {
        return this.DELETE('/', id).then(({ json, status }) => ({ json, status }));
    }
}

export default new ToursService();