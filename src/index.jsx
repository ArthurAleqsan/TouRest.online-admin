import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store, { history } from './store/configureReduxStore';
import Routes from './containers/router';
import 'antd/dist/antd.css'
import './../assets/styles/index.scss';
import './i18n';

render((
    <Provider store={store} >
        <Router history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes />
            </Suspense>
        </Router>
    </Provider>
), document.getElementById('app'));