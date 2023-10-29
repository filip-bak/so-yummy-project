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
} = require("./recipes.controller");
const {asyncWrapper}=require('../../helpers/asyncWrapper')

const router = express.Router();


router.get("/main-page",asyncWrapper( getRecipesHandler));
router.get("/categoty-list", asyncWrapper(getCategoryHandler));
router.get("/:category", asyncWrapper(getCategoryPageHandler));
router.get("/recipe/:id", asyncWrapper(getRecipeByIdHandler));

module.exports = {
  recipesRouter: router,
};
