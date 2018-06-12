"use strict";

const mongoose = require('mongoose');

// Define the category schema

const CategorySchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
});

CategorySchema.set('versionKey', false);
CategorySchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Category', CategorySchema);