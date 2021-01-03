import Request from './Request';


class AuthService extends Request {
    constructor() {
        super('/oauth2');
    }

    login({ username, password, }, errorHandler) {

        const options = {
            method: 'POST',
            body: `grant_type=password&username=${username}&password=${password}`
        };
        return this.send({
            path: '/token',
            options,
            headers: {
                "authorization": `Basic NXJxaDFkcXZrN3JmdDdpYjZlaDBhbHY1bXUydjRmOkpKdW00NldvV2NNeW5vVTFDV2xraEw=`,
                "content-type": 'application/x-www-form-urlencoded',
            },
        }, errorHandler);
    }
}

export default new AuthService();