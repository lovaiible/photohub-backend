"use strict";

const mongoose = require('mongoose');

// Define the category schema

const ProfileSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: [String],
    minDate: {
        type: Date,
        required: true
    },
    maxDate: {
        type: Date,
        required: true
    },
    location: {
        type: Schema.ObjectId,
        ref: 'Location',
        required: true
    }
});

ProfileSchema.set('versionKey', false);
ProfileSchema.set('timestamps', true);


module.exports = mongoose.model('Profile', ProfileSchema);