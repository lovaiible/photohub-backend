"use strict";

const express  = require('express');
const router   = express.Router();

const LocationController = require('../controllers/location');


router.get('/', LocationController.list); // List all locations
router.post('/', LocationController.create); // Create a new location
router.get('/:id', LocationController.read); // Read a location by Id
router.put('/:id', LocationController.update); // Update a location by Id
router.delete('/:id', LocationController.remove); // Delete a location by Id

module.exports = router;