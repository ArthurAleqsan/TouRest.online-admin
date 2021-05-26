import { combineReducers } from 'redux';

import global from './global/global.reducer';
import user from './user/user.reducer';
import tours from './tours/tour.reducer';
import categories from './categories/category.reducer';
import blog from './blog/blog.reducer';
import orders from './orders/order.reducer'


export default combineReducers({
    global,
    user,
    tours,
    categories,
    blog,
    orders
});