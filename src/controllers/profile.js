"use strict";

var ObjectId = require('mongodb').ObjectID;

const ProfileModel = require('../models/profile');

const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    ProfileModel.create(req.body)
        .then(profile => res.status(201).json(profile))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read = (req, res) => {
    ProfileModel.findById(req.params.id).exec()
        .then(profile => {

            if (!profile) return res.status(404).json({
                error: 'Not Found',
                message: `Photographer not found`
            });

            res.status(200).json(profile)

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

    ProfileModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}).exec()
        .then(profile => res.status(200).json(profile))
        .catch(error => res.status(500).json({
            error: 'Internal server error by profile update',
            message: error.message
        }));
};

const remove = (req, res) => {
    ProfileModel.findByIdAndRemove(req.params.id).exec()
        .then(() => res.status(200).json({message: `Profile with id${req.params.id} was deleted`}))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const list = (req, res) => {
    ProfileModel.find({}).exec()
        .then(profile => res.status(200).json(profile))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const query = (req, res) => {
    let isoString = new Date(req.query.date).toISOString();

    if (req.query.category === 'All') {
        ProfileModel.find({
            $and: [
                {'location.city': req.query.city},
                {'minDate' : { $lte : new Date(isoString) } },
                {'maxDate' : { $gte : new Date(isoString) } }
            ]
        }).exec()
            .then(profile => res.status(200).json(profile))
            .catch(error => res.status(500).json({
                error: 'Internal server error',
                message: error.message
            }));
    } else {
        ProfileModel.find({
            $and: [
                {'location.city': req.query.city},
                {'category.title': req.query.category},
                {'minDate' : { $lte : new Date(isoString) } },
                {'maxDate' : { $gte : new Date(isoString) } }
            ]
        }).exec()
            .then(profile => res.status(200).json(profile))
            .catch(error => res.status(500).json({
                error: 'Internal server error',
                message: error.message
            }));
    }
}

const getUser = (req, res) => {
    ProfileModel.find({'user._id' : ObjectId(req.params.id)
    }).exec()
        .then(profile => res.status(200).json(profile))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
}

module.exports = {
    create,
    read,
    update,
    list,
    remove,
    query,
    getUser
};