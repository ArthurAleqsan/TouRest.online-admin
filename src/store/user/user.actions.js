import * as types from './../types';
import { message } from 'antd';
import AuthService from "../../services/AuthService";
import UserService from '../../services/UserService';

export const login = (dispatch, form) => {
    const hide = message.loading('Logining in...');
    AuthService.login(form).then(({ status, json }) => {
        hide();
        if (AuthService.isOkStatus(status)) {
            localStorage.setItem('token', json.accessToken);
            localStorage.setItem('accessTokenExpiresAt', json.accessTokenExpiresAt);
            getUser(dispatch)
        } else {
            return message.error('username or/and password is not correct');
        }
    })
}
export const getUser = (dispatch) => {
    UserService.getCurrentUser()
        .then(res => {
            const { status, json } = res
            if (UserService.isOkStatus(status)) {
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({
                    type: types.SET_USER,
                    user: json,
                });
            }
        })
}
export const getUsers = (dispatch) => {
    UserService.getUsers()
        .then(res => {
            const { status, json: users } = res;
            if (UserService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_USERS,
                    users
                })
            } else {
                message.error(users.message);
            }
        })
}
export const createUser = (dispatch, getState, data) => {
    UserService.createUser(data)
        .then(res => {
            const { status, json: user } = res;
            if (UserService.isOkStatus(status)) {
                const { users } = getState().user;
                dispatch({
                    type: types.SET_USERS,
                    users: [...users, user]
                })
            } else {
                message.error(user.message);
            }
        })
}