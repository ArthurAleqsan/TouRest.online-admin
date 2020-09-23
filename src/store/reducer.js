import { combineReducers } from 'redux';

import global from './global/global.reducer';
import user from './user/user.reducer';


export default combineReducers({
    global,
    user,
});