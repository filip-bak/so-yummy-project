const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { getShoppingListHandler, addIngredientHandler} = require("./shopping.controller");
const { authMiddleware } = require("../../modules/auth/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware,asyncWrapper(getShoppingListHandler));
router.post("/add", authMiddleware,asyncWrapper(addIngredientHandler));

module.exports = {
  shoppingRouter: router,
};
