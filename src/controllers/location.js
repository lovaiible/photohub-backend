"use strict";

const LocationModel = require('../models/location');

const list  = (req, res) => {
    LocationModel.find({}).exec()
        .then(locations => res.status(200).json(locations))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

module.exports = {
    list
};