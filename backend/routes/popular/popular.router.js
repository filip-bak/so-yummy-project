const express = require("express");
const { getPopularRecipesHandler } = require("./popular.controller");
const { authMiddleware } = require("../../modules/auth/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware, getPopularRecipesHandler);

module.exports = {
  popularRecipesRouter: router,
};
