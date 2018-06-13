"use strict";

const BookingModel = require('../models/booking');

const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    BookingModel.create(req.body)
        .then(bookingID => res.status(201).json(bookingID))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read   = (req, res) => {
    BookingModel.findById(req.params.id).exec() //id richtig?
        .then(bookingID => {

            if (!bookingID) return res.status(404).json({
                error: 'Not Found',
                message: `Booking not found`
            });

            res.status(200).json(bookingID)

        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }));

};

const list  = (req, res) => {
    BookingModel.find({}).exec()
        .then(bookings => res.status(200).json(bookings))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

module.exports = {
    create,
    read,
    list
};