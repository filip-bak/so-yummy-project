const express = require("express");
const { getIngredientsHandler } = require('./ingredients.controller');

const { asyncWrapper } = require('../../helpers/asyncWrapper');

const router = express.Router();

router.get("/", asyncWrapper(getIngredientsHandler));

module.exports = {
    ingredientsRouter: router,
}