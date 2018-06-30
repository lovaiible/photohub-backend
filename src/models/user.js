"use strict";

const mongoose = require('mongoose');

// Define the user schema

const UserSchema  = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.set('versionKey', false);

module.exports = mongoose.model('User', UserSchema);