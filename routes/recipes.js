const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipes');

router.get('/', recipeController.getAll);

// router.get('/:id', contactsController.getSingle);

router.post('/', recipeController.createRecipe);

// router.put('/:id', contactsController.updateContact);

// router.delete('/:id', contactsController.deleteContact);

module.exports = router;