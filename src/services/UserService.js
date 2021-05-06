import Request from './Request';


class UsersService extends Request {
    
    constructor() {
        super('/users');
    }

    getManagers() {
        return this.GET('/manager').then(({ json, status }) => ({ json, status }));
    }
    
    createManager(data) {
        delete data.phone
        return this.POST('/manager', data).then(({ json, status }) => ({ json, status }));
    }

    getUserById(id) {
        return this.GET(`/${id}`).then(({ json, status }) => ({ json, status }));
    }
    
    getUsers() {
        return this.GET('/').then(({ json, status }) => ({ json, status }));
    }
    
    updateUserById(id, data) {
        return this.PUT(`/${id}`, data).then(({ json, status }) => ({ json, status }));
    }
    
    removeUser(id) {
        return this.DELETE('/', id).then(({ json, status }) => ({ json, status }));
    }
    
    getCurrentUser() {
        return this.GET('/current').then(({ json, status }) => ({ json, status }));
    }

}

export default new UsersService();