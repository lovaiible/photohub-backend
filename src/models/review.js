"use strict";

const mongoose = require('mongoose');

// Define the movie schema

const ReviewSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    text: String,
    rating: {
        type: Number,
        required: true
    },
	photographerId: {
		type: String,
        required: true
	}
});

ReviewSchema.set('versionKey', false);
ReviewSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Review', ReviewSchema);
