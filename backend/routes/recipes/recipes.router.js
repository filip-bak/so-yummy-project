const express = require("express");
const { categoryListHandler } = require("./recipes.controller");

const recipesRouter = express.Router();

recipesRouter.get("/category-list", categoryListHandler);

module.exports = recipesRouter;
