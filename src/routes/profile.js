"use strict";

const express  = require('express');
const router   = express.Router();

const ProfileController = require('../controllers/profile');

router.get("/", ProfileController.list);
router.post('/', ProfileController.create); // Create a new profile
router.get('/:id', ProfileController.read); // display profile by ID
router.put('/:id', ProfileController.update); // Update profile by Id
//may not necessary
/*router.delete('/:id', ProfileController.remove);*/ // Delete profile by Id

module.exports = router;