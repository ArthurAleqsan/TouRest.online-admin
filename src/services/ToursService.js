import Request from './Request';


class ToursService extends Request {
    constructor() {
        super('/tours');
    }
    createTour(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        return this.send({
            path: '/', options,
        }).then(({ json, status }) => ({ json, status }));
    }

    getTours() {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: '/', options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getTourById(id) {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    updateTourById(id, data) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(data)
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    removeTour(id) {
        const options = {
            method: 'DELETE',
        };
        return this.send({
            path: `/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
}

export default new ToursService();