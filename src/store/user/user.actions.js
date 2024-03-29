import * as types from './../types';
import { message } from 'antd';
import AuthService from "../../services/AuthService";
import UserService from '../../services/UserService';
import { removeFromArray, updateInArray } from '../../util/helpers';

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
export const logout = (dispatch) => {
    localStorage.clear();
    dispatch({
        type: types.SET_USER,
        user: null,
    });
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
export const getManagers = (dispatch) => {
    UserService.getManagers()
        .then(res => {
            const { status, json: managers } = res;
            if (UserService.isOkStatus(status)) {
                dispatch({
                    type: types.SET_MANAGERS,
                    managers
                })
            } else {
                message.error(managers.message);
            }
        })
}
export const createManager = (dispatch, getState, data) => {
    UserService.createManager(data)
        .then(res => {
            const { status, json: user } = res;
            if (UserService.isOkStatus(status)) {
                const { users } = getState().user;
                dispatch({
                    type: types.SET_USERS,
                    users: users ? [...users, user] : [user]
                })
            } else {
                message.error(user.message);
            }
        })
}
export const editUser = (dispatch, getState, id, data) => {
    UserService.updateUserById(id, data)
        .then(res => {
            const { status, json: user } = res;
            if (UserService.isOkStatus(status)) {
                const { users } = getState().user;
                const newUsers = updateInArray(users, user => user.id == id, user);
                dispatch({
                    type: types.SET_USERS,
                    users: newUsers
                })
            } else {
                message.error(user.message);
            }
        })
}

export const removeUser = (dispatch, getState, id) => {
    console.log(id)
    UserService.removeUser(id)
        .then(res => {
            const { status,json} = res;
            if (UserService.isOkStatus(status)) {
                const { users } = getState().users;
                const newUsers = removeFromArray(users, user => user.id == id);
                dispatch({
                    type: types.SET_USERS,
                    users: newUsers,
                });
            } else {
                message.error(json.message);
            }
        })
}