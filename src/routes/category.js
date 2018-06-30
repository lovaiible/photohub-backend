"use strict";

const express  = require('express');
const router   = express.Router();

const CategoryController = require('../controllers/category');


router.get('/', CategoryController.list); // List all categories
router.post('/', CategoryController.create); // Create a new category
router.get('/list/:name', CategoryController.getByName); // Read a category by name
router.get('/:id', CategoryController.read); // Read a category by Id
router.put('/:id', CategoryController.update); // Update a category by Id
router.delete('/:id', CategoryController.remove); // Delete a category by Id


module.exports = router;