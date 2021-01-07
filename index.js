const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const dotenv = require('dotenv')
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const app = express();

// dotenv.config()

const PORT = process.env.PORT || 3000;

const secure = false

const API_URL = 'https://api.tourest.online/api' 
// const API_URL = 'http://64.227.126.83:3010/api' 


app.use('/public', express.static('public'));
app.use('/locales', express.static('locales'));
app.use('/assets', express.static('assets'));

app.use(
    '/v1/oauth2',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true,
        secure
    })
);
app.use(
    '/v1/users',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true,
        secure
    })
);
app.use(
    '/v1/categories',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true,
        secure,
    })
);
app.use(
    '/v1/blogs',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true,
        secure,
    })
);
app.use(
    '/v1/media',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true,
        secure,
    })
);
app.use(
    '/v1/tours',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true,
        secure,
    })
);
app.use(async (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

