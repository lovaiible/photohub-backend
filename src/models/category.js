"use strict";

const mongoose = require('mongoose');

// Define the category schema

const CategorySchema  = new mongoose.Schema({
    title: {
        type: String

    },
    picture: {
        type: String
    },
    slug: {
        type: String
    }
});

CategorySchema.set('versionKey', false);
CategorySchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('Category', CategorySchema);