import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux';

const PublicRoute = ({ children, ...rest }) => {
    const {user} = useSelector(s => s.user, shallowEqual);
    if (user) return <Redirect to='/' />
    return (<>
            <Route {...rest}>{children}</Route>
        </>
    )
};
PublicRoute.propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired,
    rest: PropTypes.object,
};

export default PublicRoute;