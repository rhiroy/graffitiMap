var express = require('express');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';

var app = express();

app.get('/', function(req, res) {
    res.send(ReactDOMServer.renderToString(<App />));
});

app.listen(3000, function() {
    console.log('Graffiti is listening on 3000');
});
