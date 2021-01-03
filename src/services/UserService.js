import Request from './Request';


class UsersService extends Request {
    constructor() {
        super('/users');
    }

    getCurrentUser() {
        const options = {
            method: 'GET',
        };
        return this.send({
            path: '/current', options,
        }).then(({ json, status }) => ({json, status}));
    }
}

export default new UsersService();