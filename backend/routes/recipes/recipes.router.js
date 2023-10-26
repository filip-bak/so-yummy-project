const express = require("express");
// const { categoryListHandler } = require("./recipes.controller");

// const recipesRouter = express.Router();

// recipesRouter.get("/category-list", categoryListHandler);

// module.exports = recipesRouter;
const {
    getCategoryController,
    getCategoryPageController,
    getRecipeByIdController,
    getRecipesController
} = require('../../controllers/recipes');

const router = express.Router();

router.get('/main-page', getRecipesController);
router.get('/categoty-list', getCategoryController);
router.get('/:category', getCategoryPageController);
router.get('/recipe/:id', getRecipeByIdController);

module.exports = {
    recipesRouter:router,
}
