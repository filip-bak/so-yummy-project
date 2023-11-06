const express = require("express");

const {
  getCategoryHandler,
  getCategoryPageHandler,
  getRecipeByIdHandler,
  getRecipesHandler,
  addRecipeHandler,
} = require("./recipes.controller");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { getSearchRecipesHandler } = require("../search/search.controller");

const router = express.Router();

router.get("/", asyncWrapper(getSearchRecipesHandler));
router.post("/", asyncWrapper(addRecipeHandler));
router.get("/main-page", asyncWrapper(getRecipesHandler));
router.get("/category-list", asyncWrapper(getCategoryHandler));
router.get("/:category", asyncWrapper(getCategoryPageHandler));
router.get("/recipe/:id", asyncWrapper(getRecipeByIdHandler));

module.exports = {
  recipesRouter: router,
};
