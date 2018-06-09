"use strict";

const mongoose = require('mongoose');

// Define the location schema

const LocationSchema  = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

LocationSchema.set('versionKey', false);
LocationSchema.set('timestamps', true);

// Export the Location model
module.exports = mongoose.model('Location', LocationSchema);