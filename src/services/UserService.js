import Request from './Request';


class UsersService extends Request {
    constructor() {
        super('/users');
    }

    createUser(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        return this.send({
            path: '/manager', options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getUsers() {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: '/', options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getUserById(id) {
        const options = {
            method: 'GET',
        };
        return this.send({
            path:`/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    updateUserById(id, data) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(data)
        };
        return this.send({
            path:`/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    removeUser(id) {
        const options = {
            method: 'DELETE',
        };
        return this.send({
            path:`/${id}`, options,
        }).then(({ json, status }) => ({ json, status }));
    }
    getCurrentUser() {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: '/current', options,
        }).then(({ json, status }) => ({ json, status }));
    }

}

export default new UsersService();