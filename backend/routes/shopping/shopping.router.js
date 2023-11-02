const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { getShoppingList, addShoppingItem } = require("./shopping.controller");

const router = express.Router();

router.get("/", asyncWrapper(getShoppingList));
router.post("/", asyncWrapper(addShoppingItem));

module.exports = {
  shoppingRouter: router,
};
