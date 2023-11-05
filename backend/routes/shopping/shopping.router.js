const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const {
  getShoppingListHandler,
  addIngredientHandler,
  deleteIngredientHandler,
} = require("./shopping.controller");
const { authMiddleware } = require("../../modules/auth/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getShoppingListHandler));
router.post("/add", authMiddleware, asyncWrapper(addIngredientHandler));
router.delete(
  "/:ingredientId/:recipeId",
  authMiddleware,
  asyncWrapper(deleteIngredientHandler)
);

module.exports = {
  shoppingRouter: router,
};
