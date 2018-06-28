"use strict";

const mongoose = require('mongoose');
const Location = require("./location");
const User = require("./user");
const Category = require("./category");

const ProfileSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ""
    },
    minDate: {
        type: Date
    },
    maxDate: {
        type: Date
    },
    gallery: [{
        _id: false,
        original: String,
        thumbnail: String
    }],
    location: {
        city: String,
        country: String
    },
    user: {
        id: String,
        username: String,
    },
    category: Category.schema,
    price: Number,
    serviceDescription: String
});

ProfileSchema.set('versionKey', false);
ProfileSchema.set('timestamps', true);

module.exports = mongoose.model('Profile', ProfileSchema);