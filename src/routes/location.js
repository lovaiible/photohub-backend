"use strict";

const express  = require('express');
const router   = express.Router();

const MovieController = require('../controllers/location');


router.get('/', MovieController.list); // List all locations

module.exports = router;