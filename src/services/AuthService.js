import Request from './Request';


class AuthService extends Request {
    constructor() {
        super('/oauth2');
    }

    login({ username, password }) {
        return this.postLogin(
            `/token`,
            `grant_type=password&username=${username}&password=${password}`,
            {
                "authorization": `Basic NXJxaDFkcXZrN3JmdDdpYjZlaDBhbHY1bXUydjRmOkpKdW00NldvV2NNeW5vVTFDV2xraEw=`,
                "content-type": 'application/x-www-form-urlencoded',
            })
    }
}

export default new AuthService();