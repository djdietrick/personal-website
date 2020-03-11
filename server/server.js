const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 8080;

// Connect to DB
require('./db/db');

const token = 'Bearer 1bee85049b5537e26f7c235a197e930eb7c9b776953bdaa8a6527ef59c1c8301df64e038aba8bf074cb12719ce01c09a';
axios.defaults.headers.get['Authorization'] = token;
axios.defaults.headers.get['Accept'] = 'application/json';

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static('static'));

const musicRouter = require('./routes/music');
app.use(musicRouter);

const linkRouter = require('./routes/link');
app.use(linkRouter);

// For single page app, send all requests to index and let Vue router handle them
app.get(/.*/, (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../dist') });
});

let server = http.createServer(app);
server.listen(port);