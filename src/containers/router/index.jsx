import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import Login from '../pages/auth/Login';
import App from './App';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const MainRouter = () => {
    const { user } = useSelector(s => s.user, shallowEqual);
    const PUBLIC_PATH = '/login';

    return (
        <div className='main-conrainer'>
            <Switch>
                <PublicRoute user={user} path={PUBLIC_PATH} >
                    <Switch>
                        <Route path={`${PUBLIC_PATH}`} component={Login} />
                    </Switch>
                </PublicRoute>
                <PrivateRoute path='/' component={App} />
            </Switch>
        </div>
    );
};

export default withRouter(MainRouter);
