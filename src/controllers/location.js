"use strict";

const LocationModel = require('../models/location');

const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    LocationModel.create(req.body)
        .then(location => res.status(201).json(location))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    LocationModel.findById(req.params.id).exec()
        .then(location => {

            if (!location) return res.status(404).json({
                error: 'Not Found',
                message: `Location not found`
            });

            res.status(200).json(location)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const update = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    LocationModel.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true}).exec()
        .then(location => res.status(200).json(location))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const remove = (req, res) => {
    LocationModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Location with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const list  = (req, res) => {
    LocationModel.find({}).exec()
        .then(locations => res.status(200).json(locations))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

module.exports = {
    create,
    read,
    update,
    remove,
    list
};