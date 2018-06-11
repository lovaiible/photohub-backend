"use strict";

const express  = require('express');
const router   = express.Router();

const BookingController = require('../controllers/booking');


router.get('/', BookingController.list); // List all booking
router.post('/', BookingController.create); // Create a new booking
router.get('/:id', BookingController.read); // Read a booking by Id
//router.put('/:id', BookingController.update); // Update a booking by Id
//router.delete('/:id', BookingController.remove); // Delete a booking by Id


module.exports = router;