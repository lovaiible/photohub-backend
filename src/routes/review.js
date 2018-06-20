"use strict";

const express  = require('express');
const router   = express.Router();

const ReviewController = require('../controllers/review');


router.get('/:id', ReviewController.list); // List all movies
router.post('/', ReviewController.create); // Create a new movie
router.get('/:id', ReviewController.read); // Read a movie by Id
router.put('/:id', ReviewController.update); // Update a movie by Id
router.delete('/:id', ReviewController.remove); // Delete a movie by Id
router.get('/getAvgRating/:id', ReviewController.getAvgRating); // Get average photographer rating


module.exports = router;
	
