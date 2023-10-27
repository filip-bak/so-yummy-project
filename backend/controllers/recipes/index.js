const { getCategoryHandler} = require("./getCategoryHandler");
const { getCategoryPageHandler } = require("./getCategoryPageHandler");
const { getRecipeByIdHandler } = require("./getRecipeByIdHandler");
const { getRecipesHandler } = require("./getRecipesHandler");
const { getPopularRecipesHandler } = require("./getPopularRecipesHandler");

module.exports = {
  getCategoryHandler,
  getCategoryPageHandler,
  getRecipeByIdHandler,
  getRecipesHandler,
  getPopularRecipesHandler
};
