"use strict";

const mongoose = require('mongoose');

// Define the movie schema

const BookingSchema  = new mongoose.Schema({
    bookingID: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    addInfo: {
        type: String
    }
});

BookingSchema.set('versionKey', false);
BookingSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Booking', BookingSchema);