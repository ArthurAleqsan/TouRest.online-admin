import React from 'react';
import { Route } from 'react-router-dom';

import Blog from '../pages/content/Blog';
import Categories from '../pages/content/Categories';
import Orders from '../pages/content/Orders';
import Stats from '../pages/content/Stats';
import Tours from '../pages/content/Tours';
import Users from '../pages/content/Users';
import CreateBlog from '../pages/new-content/CreateBlog';
import CreateCategory from '../pages/new-content/CreateCategory';
import CreateTour from '../pages/new-content/CreateTour';
import CreateUser from '../pages/new-content/CreateUser';

const NestedRouter = () => {
    return (
        <>
            <Route exact path='/tours/create' component={CreateTour} />
            <Route exact path='/categories/create' component={CreateCategory} />
            <Route exact path='/users/create' component={CreateUser} />
            <Route exact path='/blog/edit/id=:id' component={() => <CreateBlog fromEdit={true} />} />
            <Route exact path='/blog/create' component={CreateBlog} />
            <Route exact path='/categories/edit/id=:id' component={() => <CreateCategory fromEdit={true} />} />
            <Route exact path='/tours' component={Tours} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/managers' component={() => <Users isManagers />} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/' component={Stats} />
        </>
    )
};

export default NestedRouter;
