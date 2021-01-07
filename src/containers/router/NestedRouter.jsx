import React from 'react';
import { Route } from 'react-router-dom';

import Blog from '../pages/content/Blog';
import Categories from '../pages/content/Categories';
import Orders from '../pages/content/Orders';
import Stats from '../pages/content/Stats';
import Tours from '../pages/content/Tours';
import Users from '../pages/content/Users';
import CreateTour from '../pages/new-content/CreateTour';

const NestedRouter = () => {
    return (
        <>
            <Route exact path='/tours/create' component={CreateTour} />
            <Route exact path='/tours' component={Tours} />
            <Route path='/categories' component={Categories} />
            <Route path='/orders' component={Orders} />
            <Route path='/users' component={Users} />
            <Route path='/blog' component={Blog} />
            <Route path='/' component={Stats} />
        </>
    )
};

export default NestedRouter;
