"use strict";

const mongoose = require('mongoose');

// Define the Booking schema

const BookingSchema  = new mongoose.Schema({
    bookingID: {
        type: Number,
        required: true
    },
    /*price: {
        type: Number,
        required: true
    },*/
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

// Export the Booking model
module.exports = mongoose.model('Booking', BookingSchema);