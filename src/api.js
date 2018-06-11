"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');

const middlewares = require('./middlewares');

const auth  = require('./routes/auth');
const category = require('./routes/category');
const locations = require('./routes/location');
const profile = require('./routes/profile');

const api = express();


// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);


// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'Photohub Backend'
    });
});

// API routes
api.use('/auth'  , auth);
api.use('/categories', category);
api.use('/locations', locations);
api.use('/profile', profile);



module.exports = api;