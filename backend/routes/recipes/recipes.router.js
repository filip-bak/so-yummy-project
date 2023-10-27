const express = require("express");
// const { categoryListHandler } = require("./recipes.controller");

// const recipesRouter = express.Router();

// recipesRouter.get("/category-list", categoryListHandler);

// module.exports = recipesRouter;
const {
  getCategoryHandler,
  getCategoryPageHandler,
  getRecipeByIdHandler,
    getRecipesHandler,
    getPopularRecipesHandler,
} = require("../../controllers/recipes");

const router = express.Router();

router.get("/", getPopularRecipesHandler);
router.get("/main-page", getRecipesHandler);
router.get("/categoty-list", getCategoryHandler);
router.get("/:category", getCategoryPageHandler);
router.get("/:id", getRecipeByIdHandler);

module.exports = {
  recipesRouter: router,
};
