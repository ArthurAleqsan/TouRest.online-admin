import Request from './Request';


class UsersService extends Request {
    constructor() {
        super('/users');
    }

    createUser(data) {
        const options = {
            method: 'POST',
        };
        return this.send({
            path: '/current', options,
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