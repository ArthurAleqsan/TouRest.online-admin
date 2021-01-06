const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// const API_URL = 'https://api.tourest.online/api' 
const API_URL = 'http://64.227.126.83:3010/api' 

app.use('/public', express.static('public'));
app.use('/locales', express.static('locales'));
app.use('/assets', express.static('assets'));

app.use(
    '/v1/oauth2',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true
    })
);
app.use(
    '/v1/users',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true
    })
);
app.use(
    '/v1/tours',
    createProxyMiddleware({
        target: API_URL,
        changeOrigin: true
    })
);
app.use(async (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

