const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// Connect to DB
require('./db/db');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static('static'));

const linkRouter = require('./routes/link');
app.use(linkRouter);

// For single page app, send all requests to index and let Vue router handle them
app.get(/.*/, (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../dist') });
});

let server = http.createServer(app);
server.listen(port);