const express = require("express");
const { getIngredientsHandler } = require("./ingredients.controller");

const { asyncWrapper } = require("../../helpers/asyncWrapper");
const { authMiddleware } = require("../../modules/auth/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getIngredientsHandler));

module.exports = {
  ingredientsRouter: router,
};
