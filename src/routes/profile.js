"use strict";

const express  = require('express');
const router   = express.Router();

const ProfileController = require('../controllers/profile');

router.get("/", ProfileController.list);
router.post('/', ProfileController.create); // Create a new profile
router.get('/search', ProfileController.query); // Search profiles
router.get('/user/:id', ProfileController.getUser); // Search user profiles
router.get('/:id', ProfileController.read); // display profile by ID
router.put('/:id', ProfileController.update); // Update profile by Id
router.delete('/:id', ProfileController.remove); // Delete profile by Id


module.exports = router;