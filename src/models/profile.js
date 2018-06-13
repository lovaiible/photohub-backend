"use strict";

const mongoose = require('mongoose');
const Location = require("./location");
const User = require("./user");

/*
// define Location for photographer
const LocationSchema  = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});*/


//define Profile schema as parent of review
const ProfileSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    avatar: String,
    picture: [String],
    minDate: {
        type: Date
    },
    maxDate: {
        type: Date
    },
    location: Location.schema,
    user: User.schema
});

ProfileSchema.set('versionKey', false);
ProfileSchema.set('timestamps', true);


module.exports = mongoose.model('Profile', ProfileSchema);