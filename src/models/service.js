"use strict";

const mongoose = require('mongoose');

// Define the photography service item schema

const ServiceSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photographer: {
        type: String,
        required: true
    },
    location: String,
    availableDates: Array,
    portfolio: Array
});

ServiceSchema.set('versionKey', false);
ServiceSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Service', ServiceSchema);