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
    avatar: String,
    picture: [{
        _id: false,
        original: String,
        thumbnail: String
    }],
    minDate: {
        type: Date
    },
    maxDate: {
        type: Date
    },
    location: Location.schema,
    user: User.schema,
    category: Category.schema,
    price: Number,
    serviceDescription: String
});

ProfileSchema.set('versionKey', false);
ProfileSchema.set('timestamps', true);

module.exports = mongoose.model('Profile', ProfileSchema);