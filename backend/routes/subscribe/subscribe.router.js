const express = require("express");
const { subscribeHandler } = require("./subscribe.controller");
const { authMiddleware } = require("../../modules/auth/auth.middleware");

const router = express.Router();

router.post("/",authMiddleware, subscribeHandler);

module.exports = {
  subscribeRouter: router,
};