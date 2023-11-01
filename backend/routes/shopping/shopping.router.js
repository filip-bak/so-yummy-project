const express = require("express");
const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { getShoppingList } = require("./shopping.controller");
const router = express.Router();

router.get("/", asyncWrapper(getShoppingList));

module.exports = {
  shoppingRouter: router,
};
