"use strict";

const mongoose = require('mongoose');

// Define the location schema

const LocationSchema  = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    synopsis: String,
    runtime: Number,
    mpaa_rating: String,
    year: {
        type: Number,
        required: true
    },
    posters: {
        thumbnail: String,
        profile: String,
        detailed: String,
        original: String
    }
});

LocationSchema.set('versionKey', false);
LocationSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Location', LocationSchema);