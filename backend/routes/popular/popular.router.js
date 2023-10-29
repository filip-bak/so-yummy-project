const express = require('express');
const { getPopularRecipesHandler } = require('./popular.controller');

const router = express.Router();

router.get("/", getPopularRecipesHandler);

module.exports = {
    popularRecipesRouter: router, 
}